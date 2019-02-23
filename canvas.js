// detect key presses- put code in if statements

document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
        // up arrow
    }
    else if (e.keyCode == '40') {
        // down arrow
    }
    else if (e.keyCode == '37') {
       // left arrow
    }
    else if (e.keyCode == '39') {
       // right arrow
    }

}

// keypress fuction code end

var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c = canvas.getContext('2d');

const x = Math.floor(Math.random() * window.innerWidth);
const y = Math.floor(Math.random() * window.innerHeight);

c.beginPath();
c.arc(x, y, 10, 0, Math.PI * 2, true);
c.fillStyle = `#ffffff`;
c.fill();
