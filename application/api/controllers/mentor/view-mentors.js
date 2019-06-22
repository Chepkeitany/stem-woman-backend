module.exports = {
  fn: async function (_, exits) {
    const mentors = Mentor.find();
    return exits.success(mentors);
  }
};
