/**
 * SkillController
 *
 * @description :: Server-side logic for managing skills
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
    get_skill:function (req,res){
        var classskill = req.param("classskill");
        Skill.find({class: classskill})
        .exec(function (err,skill) 
        {if(err){
            return res.json(err);
          }
          return res.json(skill);
            
        })

    },

};

