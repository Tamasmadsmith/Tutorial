const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

let snake = [
    { x: 200, y: 200 }
];

let snakeLength = 1;

let score = 0;

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
    const head = {
    x: snake[0].x + dx,
    y: snake[0].y + dy
};

    if (head.x < 0 || head.x >= 400 || head.y < 0 || head.y >= 400) {
    alert("Game Over! Score: " + score);
    location.reload();
}

    snake.unshift(head);

    while (snake.length > snakeLength) {
        snake.pop();
}

    if (snake[0].x === foodX && snake[0].y === foodY) {
    score++;
    console.log("Score:", score);

    foodX = Math.floor(Math.random() * 20) * 20;
    foodY = Math.floor(Math.random() * 20) * 20;
    
    snakeLength ++;

    console.log("Food eaten!");
}

    ctx.clearRect(0, 0, 400, 400);

    ctx.fillStyle = "lime";

    snake.forEach(segment => {
    ctx.fillRect(segment.x, segment.y, 20, 20);
});

    ctx.fillStyle = "yellow";
    ctx.fillRect(foodX, foodY, 20, 20); 
}

setInterval(draw, 100);