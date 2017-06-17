export default class ScoreBoard {
  constructor(boardHeight, boardWidth) {
    this.goal = 10;
    const scoreY = boardHeight / 4;
    const scoreX = boardWidth / 2;
    this.p1y = scoreY -25;
    this.p1x = scoreX +20;
    this.p2y = scoreY -25;
    this.p2x = scoreX - 25;
    this.score = 0;
    this.font = 'akbar-webfont';
  
  }
  drawScoreBoard(context,p1) {
    context.font = '30px, akbar-webfont';
    context.fillStyle = 'black';
    context.fillText(p1.score, this.p1x, this.p1y);
  }

drawScoreBoard2(context,p2) {
    context.font = '30px, akbar-webfont';
    context.fillStyle = 'black';
    context.fillText(p2.score, this.p2x, this.p2y);
  }


  render(context, p1,p2) {
    this.drawScoreBoard(context,p1);
    this.drawScoreBoard2(context,p2);

 if(this.drawScoreBoard.text || this.drawScoreBoard2.text >= 10)
    {
      alert("Game Over");
    }
    }
  }
  