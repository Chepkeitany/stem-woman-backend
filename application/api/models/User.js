/**
 * User.js
 *
 * @description :: A model definition represents a User.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    id:               { type:'string', required:true, isUUID:true, unique:true },
    name:             { type:'string', required:true },
    email_address:    { type:'string', required:true, unique:true },
    type:             { type:'string', required:true }
  },

};

