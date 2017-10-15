/**
 * ListOfSlalomSkillsController
 *
 * @description :: Server-side logic for managing listofslalomskills
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	add: function(req, res) {
        var name=req.param('name');
        var url=req.param('url');
        listOfSlalomSkills
          .create({ name: name, url: url })
          .exec(function(err, created) {
              if (err) return res.send({err: err})
            return res.send({ success: true });
          });
    }
};

