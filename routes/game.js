var router = require('express').Router();

var Game = require('../models/game');

router.post('/', function(request, response) {
  console.log('creating new game file');
  var data = request.body;

    var newGame = new Game({
      gameDuration: data.gameDuration,
      gameName: data.gameName,
      gameStart: data.gameStart,
      players: data.players,
      user: request.user._id,
      totalScore: data.totalScore,
      winner: data.winner
    });
      newGame.save(function(err){
      if (err){
        console.log('save err', err);
        response.sendStatus(500);
      } else {
        response.sendStatus(200);
      }
    })
  })
module.exports = router;
