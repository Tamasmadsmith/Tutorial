const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

let x = 200;
let y = 200;

function draw() {
    ctx.clearRect(0, 0, 400, 400);

    ctx.fillStyle = "lime";
    ctx.fillRect(x, y, 20, 20);
}

setInterval(draw, 100);