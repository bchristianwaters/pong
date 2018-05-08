var canvas = document.getElementById('myCanvas');
var context = canvas.getContext("2d");
context.fillStyle = 'white';
context.strokeStyle = "white";
var ComputerY = 260;

var p1 = new Player(260);
var cpu = new Computer(260);
var ball = new Ball(300, 300, p1, cpu);
var playerScore = 0;
var cpuScore = 0;

function redraw() {
  drawPending = false;
  context.clearRect(0, 0, canvas.width, canvas.height);
  cpu.move(ball);
  cpu.render();
  if(map[38] ^ map[40]){
    map[40] ? p1.move(1) : p1.move(-1)
  }
  p1.render();
  ball.move();
  ball.render();
  if (ball.x > 700) {
    cpuScore++
    if (cpuScore > 10) {
      document.getElementById("gameOver").innerHTML = "You lost. Refresh to play again.";
      document.getElementById("myCanvas").style.display="none";
      document.getElementById("cpuScore").innerHTML = "CPU Score: 11";
    } else {
      ball = new Ball(300, 300, p1, cpu);
      document.getElementById("cpuScore").innerHTML = "CPU Score: "+cpuScore.toString();
    }
  } else if (ball.x < -100) {
    playerScore++
    if (playerScore > 10) {
      document.getElementById("gameOver").innerHTML = "You won. Refresh to play again.";
      document.getElementById("myCanvas").style.display="none";
      document.getElementById("playerScore").innerHTML = "Your Score: 11";
    } else {
      ball = new Ball(300, 300, p1, cpu);
      document.getElementById("playerScore").innerHTML = "Your Score: "+playerScore.toString();
    }
  }
}

var drawPending = false;
function requestRedraw() {
  if (!drawPending) {
    drawPending = true;
    requestAnimationFrame(redraw) ;
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
    p1.render();
}

window.requestAnimationFrame(animate);
