// var mysql = require('mysql');
var Sequelize = require('sequelize');
var db = new Sequelize('chat', 'root', 'password');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".


// var db = mysql.createConnection(
//   {
//     user: 'root',
//     message: 'password',
//     database: 'chat'
//   }
// );

var users = db.define('users', {
  UserName: Sequelize.STRING
});

var rooms = db.define('rooms', {
  RoomName: Sequelize.STRING
});

var messages = db.define('messages', {
  Message: Sequelize.STRING
});

messages.belongsTo(users);
users.hasMany(messages);

messages.belongsTo(rooms);
rooms.hasMany(messages);

users.sync();
messages.sync();
rooms.sync();

exports.users = users;
exports.rooms = rooms;
exports.messages = messages;