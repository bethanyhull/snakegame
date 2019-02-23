var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c = canvas.getContext('2d');

const x = Math.floor(Math.random() * window.innerWidth);
const y = Math.floor(Math.random() * window.innerHeight);

c.beginPath();
c.arc(x, y, 30, 0, Math.PI * 2, true);
c.fillStyle = `#ffffff`;
c.fill();
