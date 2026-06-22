const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

let x = 200;
let y = 200;

let dx = 20;
let dy = 0;

let foodX = 100;
let foodY = 100;

document.addEventListener("keydown", (event) => {
    switch (event.key) {
        case "ArrowUp":
            dx = 0;
            dy = -20;
            break;

        case "ArrowDown":
            dx = 0;
            dy = 20;
            break;

        case "ArrowLeft":
            dx = -20;
            dy = 0;
            break;

        case "ArrowRight":
            dx = 20;
            dy = 0;
            break;
    }
});

function draw() {
    x += dx;
    y += dy;

    ctx.clearRect(0, 0, 400, 400);

    ctx.fillStyle = "red";
    ctx.fillRect(x, y, 20, 20);

    ctx.fillStyle = "yellow";
    ctx.fillRect(foodX, foodY, 20, 20); 
}

setInterval(draw, 100);