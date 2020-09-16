var controller = require('./controllers');
var router = require('express').Router();

//Connect controller methods to their corresponding routes
//direct data to server/models/messages.js & users.js
router.get('/messages', controller.messages.get);

router.post('/messages', controller.messages.post);

router.get('/users', controller.users.get);

router.post('/users', controller.users.post);

router.get('/rooms', controller.rooms.get);

router.post('/rooms', controller.rooms.post);


module.exports = router;

