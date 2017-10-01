/**
 * UsersController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  login: function(req, res) {
    var id = req.param("id");
    var name = req.param("name");
    var email = req.param("email");
    var avatar = req.param("avatar");
    /* Users.findOne({ id: id }).exec(function(err, result) {
      if (err) {
        Users.create({
          id: id,
          name: name,
          email: email,
          avatar: avatar
        }).exec(function(err, created) {
          if (err) {
            return res.serverError(err);
          }
          return res.send({ success: true });
        });
      
      }
    }); */
    users.findOrCreate({ 
      id: id,
      name: name,
      email: email,
      avatar: avatar 
    }).exec(
      function createFindCB(error, createdOrFoundRecords) {
        return res.send({success: true});
      }
    );
  }
};
