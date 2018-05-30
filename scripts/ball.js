function Ball(x, y, player, cpu){
  this.x = x;
  this.y = y;
  this.player = player;
  this.cpu = cpu;
  this.velocityx = Math.ceil(Math.random() * 5) * Math.pow(-1, Math.round(Math.random() * 2));
  this.velocityy = Math.ceil(Math.random() * 5) * Math.pow(-1, Math.round(Math.random() * 2));
  this.render = function() {
    context.fillRect(this.x, this.y, 15, 15);
  }
  this.move = function(direction) {
    this.y = this.velocityy + this.y;
    if (this.y > 585) {
      this.y = 1170 - this.y;
      this.velocityy = - this.velocityy;
    } else if (this.y < 0) {
      this.y = -this.y;
      this.velocityy = -this.velocityy;
    }
    this.x = this.velocityx + this.x;
    if (this.x > 555 && this.x < 565) {
      if (player.y-this.y > -80 && player.y-this.y < 15) {
        if (player.y-this.y > 0){
          this.velocityy -= 2;
        }
        if (player.y-this.y < -65) {
          this.velocityy += 2;
        }
        this.x = 1110 - this.x;
        this.velocityx = - this.velocityx;
      }
    } else if (this.x < 30 && this.x > 20) {
      if (cpu.y-this.y > -80 && cpu.y-this.y < 15) {
        this.x = 60-this.x;
        this.velocityx = -this.velocityx;
      }
    }
  }
}
