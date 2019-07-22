/**
 * Resource.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

    attributes: {
      id:           { type:'string', required:true, isUUID:true, unique:true },
      name:         { type:'string', required:true },
      category:     { type:'string', isIn:['bootcamp', 'after-school', 'online-course', 'online-video-content'] },
      topics:       { type:'ref', columnType: 'text[]', required:true},
      link:         { type:'string' }
    },
  
  };
  
  