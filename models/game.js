var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var gameSchema = new Schema({
  gameName: String,
  gameStart: Date,
  players: Object,
  gameDuration: Number,
  user: String,
  totalScore: Number,
  winner: Object
})

var Game = mongoose.model('Game', gameSchema);

module.exports = Game;
