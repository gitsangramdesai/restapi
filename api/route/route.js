var express = require('express');
var router = express.Router();

var starship_router = require('./starship');
router.use(starship_router);

var spaceship_router = require('./spaceship');
router.use(spaceship_router);

module.exports = router;