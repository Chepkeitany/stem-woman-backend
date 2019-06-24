/**
 * Mentor.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    id:                { type:'string', required:true, isUUID:true, unique:true },
    available_timings: { type:'string' },
    description:       { type:'string', required:true },
    location:          { type:'string' },
    name:              { type:'string', required:true },
    photo_url:         { type:'string', required:true },
    skills:            { type:'ref', columnType: 'text[]' },
    timezone:          { type:'string', required:true },
  },

};

