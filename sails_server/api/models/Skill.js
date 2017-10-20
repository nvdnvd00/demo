/**
 * Skill.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  autoCreatedAt: false,
	autoUpdatedAt: false,
  attributes: {
    id:{
      type:'integer',
      primaryKey:true,
      required:true,
      unique:true,
    },
    name:{
      type:'string',
      required:true,
      unique:true
    },
    class:{
      type:'string'
    },
    level:{
      type:'string'
    },
    url:{
      type:'string'
    },
    description:{
      type:'string'
    }
  }
};

