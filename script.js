// Simple game logic for a Flappy Bird-like game with a chick

const canvas = document.createElement("canvas");
document.body.appendChild(canvas);
const ctx = canvas.getContext("2d");

// Game settings
canvas.width = 800;
canvas.height = 600;
const gravity = 0.5;
let chickY = canvas.height / 2;
let chickVelocity = 0;
const chickWidth = 50;
const chickHeight = 50;
let isGameOver = false;

// Draw chick
function drawChick() {
    ctx.fillStyle = "#FFD700"; // Yellow color for the chick
    ctx.fillRect(100, chickY, chickWidth, chickHeight);
}

// Update game
function updateGame() {
    if (isGameOver) return;

    chickVelocity += gravity;
    chickY += chickVelocity;

    // Prevent chick from going off the canvas
    if (chickY > canvas.height - chickHeight) {
        chickY = canvas.height - chickHeight;
        chickVelocity = 0;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawChick();
}

// Jump function
function jump() {
    if (isGameOver) return;
    chickVelocity = -10; // Jump velocity
}

// Event listener for jump action
document.addEventListener("keydown", (event) => {
    if (event.key === " ") {
        jump();
    }
});

// Start the game
function startGame() {
    setInterval(updateGame, 20);
}

startGame();
