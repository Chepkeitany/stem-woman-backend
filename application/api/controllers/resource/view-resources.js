/**
 * View a list of STEM resources
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */


module.exports = {
    fn: async function (_, exits) {
      const resources = await Resource.find();
      return exits.success(resources);
    }
  };
