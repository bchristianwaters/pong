function Ball(x, y, player, cpu){
  this.x = x;
  this.y = y;
  this.player = player;
  this.cpu = cpu;
  this.vx = Math.ceil(Math.random() * 5) * Math.pow(-1, Math.round(Math.random() * 2));
  this.vy = Math.ceil(Math.random() * 5) * Math.pow(-1, Math.round(Math.random() * 2));
  this.render = function() {
    context.fillRect(this.x, this.y, 15, 15);
  }
  this.move = function(direction) {
    // this.x = Math.min(560, Math.max(0, this.vx + this.x))
    this.y = this.vy + this.y;
    if (this.y > 585) {
      this.y = 1170 - this.y;
      this.vy = - this.vy;
    } else if (this.y < 0) {
      this.y = -this.y;
      this.vy = -this.vy;
    }
    this.x = this.vx + this.x;
    if (this.x > 555 && this.x < 565) {
      if (player.y-this.y > -80 && player.y-this.y < 15) {
        this.x = 1110 - this.x;
        this.vx = - this.vx;
      }
    } else if (this.x < 30 && this.x > 20) {
      if (cpu.y-this.y > -80 && cpu.y-this.y < 15) {
        this.x = 60-this.x;
        this.vx = -this.vx;
      }
    }
  }
}
