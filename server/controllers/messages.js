// var models = require('../models');
var db = require('../db');

//activate the the models.
// callback || promises
module.exports = {
  get: function (req, res) {
    db.messages.findAll()
      .then(function(results) {
        res.json(results);
      });
  },
  post: function (req, res) {
    db.users.findOrCreate({where: {username: req.body.username}})
      .spread(function(user, created) {
        db.rooms.findOrCreate({where: {roomname: req.body.roomname}})
          .spread(function(room, created) {
            db.messages.create({
              UserID: user.get('ID'),
              Message: req.body.message,
              RoomID: rooms.get('ID')
            }).then(function(results) {
              res.sendStatus(201);
            });
          });
      });
  }
};

