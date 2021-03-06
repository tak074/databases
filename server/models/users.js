var db = require('../db');


module.exports = {
  getAll: function (callback) {
    var querystring = 'select * from users;';
    db.query(querystring, function(err, result) {
      callback(err, result);
    });
  },
  create: function (params, callback) {
    var querystring = 'insert into users (userName) values (?)';
    db.query(querystring, params, function(err, result) {
      callback(result);
    });
  }
};
