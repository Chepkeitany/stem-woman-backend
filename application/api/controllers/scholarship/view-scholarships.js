/**
 * View a list of scholarships
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */


module.exports = {
  fn: async function (_, exits) {
    const scholarships = await Scholarship.find();
    return exits.success(scholarships);
  }
};


