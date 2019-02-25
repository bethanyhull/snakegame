var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c = canvas.getContext('2d');

//const x = Math.floor(Math.random() * window.innerWidth);
//const y = Math.floor(Math.random() * window.innerHeight);

// detect key presses- put code in if statements

document.onkeydown = checkKey;

var snakeX = 200
var snakeY = 200
dy = 10;
dx = 10

let snake = [{x: 150, y: 150},
             {x: 140, y: 140},
             {x: 130, y: 140},
             {x: 120, y: 140}]


function checkKey(e) {

    e = e || window.event;
    if (e.key == '38') {
      dy = 10;
        // up arrow
    }
    else if (e.key == '40') {
      dy = -10;
        // down arrow
    }
    else if (e.key == '37') {
      dx = -10;
       // left arrow
    }
    else if (e.key == '39') {
      dx = 10;
       // right arrow
    }

}

function drawSnake(snakePart) {
  c.beginPath();
  c.arc(snakePart.x, snakePart.y, 10, 0, Math.PI * 2, true);
  c.fillStyle = `#ffffff`;
  c.fill();
};

drawSnake(snake);

function drawBigSnake() {
  snake.forEach(drawSnake());

};

drawBigSnake();
