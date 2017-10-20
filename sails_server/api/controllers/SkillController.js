/**
 * SkillController
 *
 * @description :: Server-side logic for managing skills
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	get_slalom: function (req,res) {
        Skill.find({class: 'slalom'})
        .exec(function (err,slalom) 
        {if(err){
            return res.json(err);
          }
          return res.json(slalom);
            
        })
    }
};

