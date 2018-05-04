function Ball(x, y){
  this.x = x;
  this.y = y;
  this.vx = 0;
  this.vy = 0;
  this.render = function() {
    context.moveTo(this.x, this.y);
    context.arc(this.x, this.y, 10, 0, 2 * Math.PI, false);
    context.fill();
  }
}
