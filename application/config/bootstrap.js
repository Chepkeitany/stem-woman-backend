/**
 * Seed Function
 * (sails.config.bootstrap)
 *
 * A function that runs just before your Sails app gets lifted.
 * > Need more flexibility?  You can also create a hook.
 *
 * For more information on seeding your app with fake data, check out:
 * https://sailsjs.com/config/bootstrap
 */
const uuid = require('uuid/v4');
const Chance = require('chance');
const chance = new Chance();

module.exports.bootstrap = async function () {
  const users = await User.count();

  if (users) {
    return;
  }
  else {
    if (process.env.NODE_ENV === 'development') {
      await User.createEach([
        {
          id: uuid(),
          created_at: Date.now(),
          updated_at: Date.now(),
          email_address: chance.email(),
          name: chance.name(),
          type: 'mentor'
        },
        {
          id: uuid(),
          created_at: Date.now(),
          updated_at: Date.now(),
          email_address: chance.email(),
          name: chance.name(),
          type: 'general'
        },
      ]);
    }
  }
};
