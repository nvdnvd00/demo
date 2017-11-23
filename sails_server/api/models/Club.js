/**
 * Club.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  autoCreatedAt: false,
	autoUpdatedAt: false,
  attributes: {
    id: {
      type:'integer',
      primaryKey:true,
      required:true,
      unique:true,
    },
    name:{
      type:'string',
      required:true,
    },
    avt:{
      type:'string'
    },
    descrip:{
      type:'text'
    },
    video:{
      type:'string'
    },
    fb:{
      type:'string'
    },
    email:{
      type:'string',
      email: true,
    },
    sdt:{
      type:'string'
    }
  }
};

