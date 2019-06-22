/**
 * Scholarship.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    name:         { type:'string', required:true, unique:true },
    target_group: { type:'string', required:true },
    deadline:     { type:'string', required:true },
    link:         { type:'string' }
  },

};

