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
    },
    get_slide: function (req,res) {
        Skill.find({class: 'slide'})
        .exec(function (err,slalom) 
        {if(err){
            return res.json(err);
          }
          return res.json(slalom);
            
        })
    },
    get_skill:function (req,res){
        var classskill = req.param("classskill");
        Skill.find({class: classskill})
        .exec(function (err,skill) 
        {if(err){
            return res.json(err);
          }
          return res.json(skill);
            
        })

    }
};

