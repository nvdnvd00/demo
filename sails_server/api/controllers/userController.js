/**
 * UsersController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  //create/update account when login
  login: function(req, res) {
    var id = req.param("id");
    var name = req.param("name");
    var email = req.param("email");
    var avatar = req.param("avatar");

    user.findOne({ id: id }).exec(function(error, result) {
      if (result==undefined) {
        user
          .create({
            id: id,
            name: name,
            email: email,
            avatar: avatar
          })
          .exec(function(err, created) {
            //tao list skill for user-----------------------
            Skill.find().exec(function (err,items) {
              var x=items.length;
              
              for (var i=1;i<=x;i++)
              {
                Userskill.updateOrCreate({user:id,skill:i},{user:id,skill:i,statusskill:'no'})
              }
              /* res.send({x}); */
            })  
            //------------------------------------
            return res.send({ success: true });
          });
      }

      if (result!=undefined) {
        user
          .update(
            {
              id: id
            },
            {
              name: name,
              email: email,
              avatar: avatar
            }
          )
          .exec(function(err, updated) {
            //tao list skill for user-----------------------
            Skill.find().exec(function (err,items) {
              var x=items.length;
              
              for (var i=1;i<=x;i++)
              {
                Userskill.updateOrCreate({user:id,skill:i},{user:id,skill:i,statusskill:'no'})
              }
              /* res.send({x}); */
            })  
            //------------------------------------
            res.send({
              success: true
            });
          });
      }
    });

    
  },
  get_my_list_skill: function(req, res) {
    var id=req.param("id");
    Userskill.query('SELECT b.skill,a.name, b.statusskill FROM skill a, userskill b where a.id=b.skill and b.user= ?',[id],
    function (err,result) {
      
      res.send(result);
    
    })
      
    
  },
  countskill: function(req, res) {
    var userid=req.param("id");
    
    Skill.find().exec(function (err,items) {
      var x=items.length;
      
      for (var i=1;i<=x;i++)
      {
        Userskill.updateOrCreate({user:userid,skill:i},{user:userid,skill:i,statusskill:'no'})
      }
      res.send({x});
    })     
    } 
};
