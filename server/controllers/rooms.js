
// var models = require('../models');
var db = require('../db');

module.exports = {
  get: function (req, res) {
    db.rooms.findAll().then(function(results) {
      res.json(results);
    });
  },
  post: function (req, res) {
    db.rooms.findOrCreate({where: {roomname: req.body.roomname}})
      .spread(function(room, created) {
        res.json(created);
      });
  }
};
