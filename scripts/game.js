var canvas = document.getElementById('myCanvas');
var context = canvas.getContext("2d");
context.fillStyle = 'white';
context.strokeStyle = "white";
var ComputerY = 260;

var p1 = new Player(260);
var ball = new Ball(300, 300);

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
function redraw() {
  drawPending = false;
  context.clearRect(0, 0, canvas.width, canvas.height);
  MidLine();
  Computer(ComputerY);
  p1.render();
  ball.render();
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
      map[40] ? p1.move(1) : p1.move(-1)
    }
    p1.render();
    requestRedraw();
}

window.requestAnimationFrame(animate);
