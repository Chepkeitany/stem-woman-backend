/**
 * Sails Seed Settings
 * (sails.config.seeds)
 *
 * Configuration for the data seeding in Sails.
 *
 * For more information on configuration, check out:
 * http://github.com/frostme/sails-seed
 */

const uuid = require('uuid/v4');
const Chance = require('chance');
const chance = new Chance();

module.exports.seeds = {
  scholarship: [
    {
      id: uuid(),
      created_at: Date.now(),
      updated_at: Date.now(),
      name: 'Women Techmakers Scholarship EMEA',
      target_group: 'Undergraduate or graduate students studying in schools in Europe, Middle East and Africa',
      deadline: 'December 6th 2019',
      link: 'https://www.womentechmakers.com/scholars'
    }
  ],
  conference: [
    {
      id: uuid(),
      created_at: Date.now(),
      updated_at: Date.now(),
      name: 'Grace Hopper Celebration Conference',
      location: 'Orlando, Florida'

    }
  ],
  heroine: [
    {
      id: uuid(),
      created_at: Date.now(),
      updated_at: Date.now(),
      name: chance.name(),
      photo_url: chance.avatar({protocol: 'https', fileExtension:'jpg'}),
      description:  chance.paragraph(),
      period_alive: '1800-1902',
      category: 'pioneer'
    },
    {
      id: uuid(),
      created_at: Date.now(),
      updated_at: Date.now(),
      name: chance.name(),
      photo_url: chance.avatar({protocol: 'https', fileExtension:'jpg'}),
      description:  chance.paragraph(),
      period_alive: '1900-todate',
      category: 'pioneer'
    }
  ],
  mentor: {
    id: uuid(),
    created_at: Date.now(),
    updated_at: Date.now(),
    available_timings: '11 - 12 a.m',
    description: chance.paragraph(),
    location: chance.city() + ', ' +  chance.country(),
    name: chance.name(),
    photo_url: chance.avatar({protocol: 'https', fileExtension:'jpg'}),
    skills: ['React', 'React Native'],
    timezone: 'EAT'
  }
};
