/**
 * Users.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  autoCreatedAt: false,
	autoUpdatedAt: false,
  attributes: {
    id:{
      type:'string',
      primaryKey:true,
      required:true,
      unique:true,
    },
    name:{
      type:'string',
      required:true,
    },
    email:{
      type:'string',
     
      email:true,
    },
    avatar:{
      type:'string'
    },
    skills:{
      collection:'Skill',   //user collect skill   
      through:'userskill'   //Bỏ qua model userskill
    }
  }
};

