DROP DATABASE chat;

CREATE DATABASE chat;

USE chat;



/* Create other tables and define schemas for them here! */
CREATE TABLE users (
  ID INT AUTO_INCREMENT PRIMARY KEY,
  UserName varchar(255)
);

CREATE TABLE rooms (
  ID INT AUTO_INCREMENT PRIMARY KEY,
  RoomName varchar(225)
);

-- CREATE TABLE users_rooms (
--   UserID INT NOT NULL,
--   RoomID INT NOT NULL,
--   FOREIGN KEY(UserID) REFERENCES users(ID),
--   FOREIGN KEY(RoomID) REFERENCES rooms(ID)
-- );

CREATE TABLE messages (
  ID INT AUTO_INCREMENT PRIMARY KEY,
  Message varchar(255),
  UserID INT NOT NULL,
  RoomID INT NOT NULL,
  FOREIGN KEY(UserID) REFERENCES users(ID),
  FOREIGN KEY(RoomID) REFERENCES rooms(ID)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.

*/

-- 'source /home/goat/code/hrr48-databases/server/schema.sql'