function Computer(y) {
    this.y = y;
    this.speed = 3;
    this.render = function() {context.fillRect(10, this.y, 20, 80);}
    this.move = function(ball) {
      this.y+30 < ball.y ? this.y = Math.min(this.speed+this.y,520) : this.y = Math.max(this.y-this.speed,0);
    }
}
