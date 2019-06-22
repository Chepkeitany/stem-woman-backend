FROM node:lts-alpine

WORKDIR /www

ADD application/package.json application/yarn.lock /www/
RUN yarn install \
	&& yarn cache clean;

ADD application /www

CMD ["yarn", "start"]
