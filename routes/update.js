var router = require('express').Router();

var Game = require('../models/game');

router.put('/:id', function(request, response){
  var data = request.body;


  Game.findById(request.params.id, function(err, game){
    if(err){
      console.log(err);
      response.sendStatus(500);
    } else {

        game.players = data.players;
        game.totalScore = data.totalScore;
        game.winner = data.winner;


      game.save(function(err){
        if(err){
          console.log('there was an issue updating game', err);
          response.sendStatus(500);
        }else{
          console.log('the game was updated');
          response.sendStatus(200);
        }
      })
    }
  })
})
module.exports = router;
