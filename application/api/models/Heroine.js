/**
 * Heroine.js
 *
 * @description :: A model definition represents a Heroine.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    id:           { type:'string', required:true, isUUID:true, unique:true },
    name:         { type:'string', required:true },
    photo_url:    { type:'string', required:true },
    description:  { type:'string', required:true },
    period_alive: { type:'string' },
    category:     { type:'string',required: true,
      isIn: ['pioneer', 'unsung_hero', 'modern'] }
  },

};

