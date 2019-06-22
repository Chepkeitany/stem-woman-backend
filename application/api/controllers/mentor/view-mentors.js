module.exports = {
  fn: async function (_, exits) {
    const mentors = await Mentor.find();
    return exits.success(mentors);
  }
};
