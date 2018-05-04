var canvas = document.getElementById('myCanvas');
var context = canvas.getContext("2d");
context.fillStyle = 'white';
context.strokeStyle = "white";
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
MidLine();
Player(260);
Computer(260);
Ball(300, 300)
