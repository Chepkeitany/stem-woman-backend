module.exports = {
  fn: async function (_, exits) {
    const conferences = await Conference.find();
    return exits.success(conferences);
  }
};


