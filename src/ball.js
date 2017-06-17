const size = 5

export default class Ball {
  constructor(boardHeight, boardWidth, size, p1, p2) {
    this.boardHeight = boardHeight;
    this.boardWidth = boardWidth;
    this.x = 150;
    this.y = 75;
    this.vy = Math.floor(Math.random() * 12 - 6); // y direction
    this.vx = (7 - Math.abs(this.vy)); // x direction
    this.size = size;
    this.speed = 5;
    this.p1 = p1;
    this.p2 = p2;
    this.radius = 2;
    this.imgObj = new Image();
    this.imgObj.src = 'http://localhost:3000/images/donut.png';
    this.snd = new Audio('http://localhost:3000/sounds/score.mp3');
    this.snd.volume = 1;
}

  drawBall(context) {
    context.drawImage(this.imgObj,this.x, this.y,20,20);
    context.beginPath();
    context.fill();
    context.closePath();
  }


paddleCollision(p1, p2){
      if (this.vx > 0) {
          const inRightEnd = this.x >= p2.x;
          if (inRightEnd) {
              if (this.y >= p2.y && this.y <= (p2.y + p2.height)){
                  this.vx *= -1;
              }
          }
      } else {
          const inLeftEnd = this.x <= p1.x + p1.width
          
          if (inLeftEnd) {
              if (this.y >= p1.y && this.y <= (p1.y + p1.height)) {
                  this.vx *= -1;
              }
          } 
      } 
 }

 goal(p1,p2){
   if (this.x <= 0 + this.radius ){
     this.speed *= -1;
     this.x = (this.boardWidth/2);
     this.y = (this.boardHeight/2);
     p1.score += 1;
     this.snd.play();
   }
   if (this.x >= this.boardWidth - this.radius ){
     this.speed *= -1;
     this.x = (this.boardWidth/2);
     this.y = (this.boardHeight/2);
     p2.score+= 1;
     this.snd.play();
   }
 }

  render(context, p1, p2) {
    this.goal(p1,p2);
    this.x += this.vx;
    this.y += this.vy;
    this.drawBall(context);
    this.paddleCollision(p1,p2);

    const hitLeft = this.x - this.radius >= this.boardWidth;
    const hitRight = this.x + this.radius <= 0;
    const hitTop = this.y + this.radius <= 0;
    const hitBottom = this.y - this.radius >= this.boardHeight;

    if (hitRight || hitLeft) {
      this.vx *= -1;
    }

    if (hitTop || hitBottom) {
      this.vy *= -1;
    }

  }
}