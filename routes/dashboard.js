var router = require('express').Router();

var Game = require('../models/game')

router.get('/untimed', function(request, response){
  Game.find({user: request.user._id, gameDuration: 0}, function(err, games){
    if(err){
      console.log('untimed find error', err);
      response.sendStatus(500);
    }else{
      console.log(games);
      response.send(games)
    }
  })
});

router.get('/timed', function(request, response){
  Game.find({user: request.user._id, gameDuration: {$ne: 0}}, function(err, games){
    if(err){
      console.log('timed find error', err);
      response.sendStatus(500);
    }else{
      console.log(games);
      response.send(games)
    }
  })
});

router.delete('/deleteUntimed/:id', function(request, response){
  var id = request.params.id;

  Game.findByIdAndRemove(id, function(err, game){
    if(err){
      console.log(err);
      response.sendStatus(500);
    }else{
      console.log('game deleted');
      response.sendStatus(200);
    }
  })
});

router.delete('/deleteTimed/:id', function(request, response){
  var id = request.params.id;

  Game.findByIdAndRemove(id, function(err, game){
    if(err){
      console.log(err);
      response.sendStatus(500);
    }else{
      console.log('game deleted');
      response.sendStatus(200);
    }
  })
});


module.exports = router;
