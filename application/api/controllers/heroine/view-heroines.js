module.exports = {
  fn: async function (_, exits) {
    const heroines = await Heroine.find();
    return exits.success(heroines);
  }
};
