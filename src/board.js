export default class Board {
    constructor(height,width) {
        this.height = height;
              this.width = width;
    }

drawLine(context) {
    context.fillStyle = 'black';
     context.setLineDash([10, 10]);
     context.beginPath();
     context.moveTo(this.width / 2, 0);
     context.lineTo(this.width / 2, this.height);
     context.strokeStyle = 'black';
     context.stroke();
  }

  //stops the bar from bleeding
    drawBoard(context) {
       context.fillStyle = 'black';
     context.fillRect(0, 0, this.width, this.height)
    }

render(context) {
    context.clearRect(0, 0, this.width, this.height);
        this.drawLine(context);
    }

       }

