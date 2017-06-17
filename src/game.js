import Paddle from './Paddle';
import Board from './Board';
import Ball from './Ball';
import ScoreBoard from './Scoreboard';

import {
    player1Keys,
    player2Keys
} from './keys';

const gap = 10;

export default class Game {
    constructor(id) {
        const canvas = document.getElementById('game');
        this.height = canvas.height;
        this.width = canvas.width;
        this.context = canvas.getContext('2d');
        this.context.fillStyle = 'white';
 
        //this.start = new Start(this.height, this.width);
        this.board = new Board(this.height, this.width);
        this.p1 = new Paddle(this.height, 5, 'yellow', player1Keys)
        this.p2 = new Paddle(this.height, this.width - 10, 'blue', player2Keys)
        this.ball = new Ball(this.height, this.width, 10, this.p1, this.p2);
        this.scoreBoard = new ScoreBoard(this.height, this.width);
}

    render() {
        //this.start.render(this.context);
        this.board.render(this.context);
        this.p1.render(this.context);
        this.p2.render(this.context);
        this.ball.render(this.context, this.p1, this.p2);
       this.scoreBoard.render(this.context, this.p1, this.p2);
    }
}