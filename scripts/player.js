var PlayerY = 260;
function Player(y) {
    this.y = y;
    this.speed = 5;
    this.render = function() {context.fillRect(570, this.y, 20, 80);}
    this.move = function(direction) {
      this.y = Math.min(520, Math.max(0, direction*this.speed + this.y))
    }
}
