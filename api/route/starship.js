var express = require('express');
var starship_router = express.Router();

var db = require('../queries/starship');
starship_router.get('/starship', db.starship.getAllStarships);
starship_router.get('/starship/:id', db.starship.getStarship);
starship_router.post('/starship', db.starship.createStarship);
starship_router.put('/starship/:id', db.starship.updateStarship);
starship_router.delete('/starship/:id', db.starship.removeStarship);


starship_router.get('/info', function(req, res, next) {
    res.status(200)
      .json({
        status: 'success',
        message: 'Info - Live long and prosper!!'
      });
});

starship_router.get('/', function(req, res, next) {
  res.status(200)
    .json({
      status: 'success',
      message: 'Live long and prosper!!'
    });
});

module.exports = starship_router;
