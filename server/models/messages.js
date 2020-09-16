var db = require('../db');
//fs

//use fs.writeFile ||fs.readAll(?)
// for the user messages

module.exports = {
  getAll: function (callback) {
    var queryString = 'SELECT * FROM messages INNER JOIN users ON (messages.UserID = users.ID) INNER JOIN rooms ON (messages.RoomID = rooms.ID)';
    db.query(queryString, function(err, results) {
      if (err) {
        throw 'error';
      }
      callback(results);
    });
  },
  // a function which produces all the messages
  create: function (params, callback) {
    var queryString = 'INSERT INTO messages (Message, UserID, RoomID) VALUES (?, (SELECT ID from users WHERE (UserName = ?) LIMIT 1), (SELECT ID from rooms WHERE (RoomName = ?) LIMIT 1))';
    db.query(queryString, params, function(err, results) {
      if (err) { throw 'error'; }
      callback(results);
    });
  } // a function which can be used to insert a message into the database
};
