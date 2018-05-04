var canvas = document.getElementById('myCanvas');
var context = canvas.getContext("2d");
context.fillStyle = 'white';
context.strokeStyle = "white";
var PlayerY = 260;
var ComputerY = 260;
var BallX = 300;
var BallY = 300;
function Player(y){
  context.fillRect(570, y, 20, 80);
}
function Computer(y){
  context.fillRect(10, y, 20, 80);
}
function MidLine(){
  for (var x = 0.5; x < 600; x += 20) {
    context.moveTo(300, x);
    context.lineTo(300, x+10);
    context.stroke();
  }
}
function Ball(x, y){
  context.moveTo(x, y);
  context.arc(x, y, 10, 0, 2 * Math.PI, false);
  context.fill();
}
function redraw() {
  drawPending = false;
  context.clearRect(0, 0, canvas.width, canvas.height);
  MidLine();
  Player(PlayerY);
  Computer(ComputerY);
  Ball(BallX, BallY)
}

var drawPending = false;
function requestRedraw() {
  if (!drawPending) {
    drawPending = true;
    requestAnimationFrame(redraw);
  }
}
function animate(timestamp) {
  requestRedraw();
  requestAnimationFrame(animate);
}
var map = {};
onkeydown = onkeyup = function(e){
    e = e || event; // to deal with IE
    map[e.keyCode] = e.type == 'keydown';
    if(map[38] ^ map[40]){
      if (map[40]) {
        if (PlayerY < 520) {PlayerY = PlayerY + 5;}
      }else if (map[38] && PlayerY > 0) {
        PlayerY -= 5;
      }
    }
}

window.requestAnimationFrame(animate);
