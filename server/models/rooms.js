var db = require('../db');

module.exports = {
  getAll: function (callback) {
    var querystring = 'select * from rooms;';
    db.query(querystring, function(err, result) {
      callback(err, result);
    });
  },
  create: function (params, callback) {
    var querystring = 'insert into rooms (RoomName) values (?)';
    db.query(querystring, params, function(err, result) {
      callback(result);
    });
  }
};