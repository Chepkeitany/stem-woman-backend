module.exports = {
  inputs: {
    timezone: { type: 'string' },
    name:     { type: 'string' },
  },
  exits: {
    notFound: { statusCode: 404}
  },
  fn: async function (inputs, exits) {
    const mentor = await Mentor.findOne(inputs);
    if (mentor) {
      return exits.success(mentor);
    } else {
      return exits.notFound();
    }
  }
};
