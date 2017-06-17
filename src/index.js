import './game.css';
//import Start from './Start';
import Game from './Game';
import Paddle from './Paddle';
//import Computer from './Computer';
import Board from './Board';
import Ball from './Ball';
import ScoreBoard from './Scoreboard';


var game = new Game();

const ms = 30;

// self invoking function
(function gameLoop() {
	game.render();
	setTimeout(gameLoop, ms);
}());