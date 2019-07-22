#!/bin/sh

deploy_k8s() {
	read -p "Deploying to k8s $environment environment in the $namespace namespace. Continue? (Y/n): " -n 1 -r
	echo  #
  if [[ $REPLY =~ ^[Yy]$ ]]; then
		echo "Configuring configMaps..."
    kubectl delete configmap $app-configmaps -n $namespace --cluster gke_stem-woman_europe-west1-b_stem-woman || echo "Failed to delete deployment configmap. OK for first time deployment."
    kubectl create configmap $app-configmaps -n $namespace --from-env-file=configmaps/.env.$environment --cluster gke_stem-woman_europe-west1-b_stem-woman
		echo "Configuring secrets..."
    kubectl delete secret $app-secrets -n $namespace --cluster gke_stem-woman_europe-west1-b_stem-woman || echo "Failed to delete deployment secret. OK for first time deployment."
    kubectl create secret generic $app-secrets  -n $namespace --from-env-file=secrets/.env.$environment  --cluster gke_stem-woman_europe-west1-b_stem-woman
		echo "Configuring services..."
		kubectl apply -n $namespace -f services --cluster gke_stem-woman_europe-west1-b_stem-woman
		echo "Configuring ingress..."
		kubectl apply -f ingress/$environment.yaml --cluster gke_stem-woman_europe-west1-b_stem-woman
	fi

  if [ $environment == "development" ]; then
		echo "Configuring deployments..."
		kubectl apply -n $namespace -f deployments/deployment.yaml --cluster gke_stem-woman_europe-west1-b_stem-woman
  else
		echo "Configuring deployments..."
		kubectl apply -n $namespace -f deployments/deployment.yaml --cluster gke_stem-woman_europe-west1-b_stem-woman
  fi
}

app=stem-woman
case $1 in
    prod)
        environment=production
				namespace=$environment
        deploy_k8s
        ;;
    *)
        echo "
usage: deploy [prod]
"
		;;
esac
