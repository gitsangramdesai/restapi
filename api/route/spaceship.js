var express = require('express');
var spaceship_router = express.Router();

var db = require('../queries/starship');

spaceship_router.get('/spaceship', db.starship.getAllStarships);
spaceship_router.get('/spaceship/:id', db.starship.getStarship);
spaceship_router.post('/spaceship', db.starship.createStarship);
spaceship_router.put('/spaceship/:id', db.starship.updateStarship);
spaceship_router.delete('/spaceship/:id', db.starship.removeStarship);


spaceship_router.get('/help', function(req, res, next) {
    res.status(200)
      .json({
        status: 'success',
        message: 'help - Live long and prosper!!'
      });
});

spaceship_router.get('/query', function(req, res, next) {
  res.status(200)
    .json({
      status: 'success',
      message: 'query - Live long and prosper!!'
    });
});

module.exports = spaceship_router;
