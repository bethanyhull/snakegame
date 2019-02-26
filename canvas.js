var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c = canvas.getContext('2d');

//const x = Math.floor(Math.random() * window.innerWidth);
//const y = Math.floor(Math.random() * window.innerHeight);

// detect key presses- put code in if statements

document.onkeydown = checkKey;

var snakeX = 150
var snakeY = 150
dy = 20;
dx = 0;

let snake = [[snakeX, snakeY],
             [130, 150],
             [110, 150],
             [90, 150]]


function checkKey(e) {

    e = e || window.event;
    if (e.key == '38') {
      dy = 10;
      dx = 0;
        // up arrow
    }
    else if (e.key == '40') {
      dy = -10;
      dx = 0;
        // down arrow
    }
    else if (e.key == '37') {
      dy = 0;
      dx = -10;
       // left arrow
    }
    else if (e.key == '39') {
      dy = 0;
      dx = 10;
       // right arrow
    }

}
function drawSnake() {
  var clone = snake.slice(0);
  snake[0][0] += dx;
  snake[0][1] += dy;


  for (var i = 0; i < snake.length; i++) {
    c.beginPath();
    c.arc(snake[i][0], snake[i][1], 10, 0, Math.PI * 2, true);
    c.fillStyle = `#ffffff`;
    c.fill();

}

for (var j = 1; j < snake.length; j++) {

  snake[j][0] = clone[j-1][0];
   snake[j][1] = clone[j-1][1];

   console.log(clone[j][0]);
   console.log(clone[j][1]);
   console.log(snake[j][0]);
   console.log(snake[j][1]);
   console.log(j);
 }

}



drawSnake();

function moveSnake() {
  c.clearRect
}

// for (var i = 1; i < snake.length; i++) {
//   snake[i][x] = snake[i-1][x]
//   snake[i][y] = snake[i-1][y]
// }
