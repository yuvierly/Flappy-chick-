// Game setup
const canvas = document.createElement("canvas");
document.body.appendChild(canvas);
const ctx = canvas.getContext("2d");

// Canvas settings
canvas.width = 800;
canvas.height = 600;
const gravity = 0.5;
let chickY = canvas.height / 2;
let chickVelocity = 0;
const chickWidth = 50;
const chickHeight = 50;
let isGameOver = false;
let chickX = 100; // Position for the chick

// Draw the chick
function drawChick() {
    ctx.fillStyle = "#FFD700"; // Yellow color for the chick
    ctx.fillRect(chickX, chickY, chickWidth, chickHeight);
}

// Draw game over screen
function drawGameOver() {
    ctx.fillStyle = "black";
    ctx.font = "30px Arial";
    ctx.fillText("Game Over!", canvas.width / 2 - 80, canvas.height / 2);
}

// Update game state
function updateGame() {
    if (isGameOver) {
        drawGameOver();
        return;
    }

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

// Handle jumping (space bar)
function jump() {
    if (isGameOver) return;
    chickVelocity = -10; // Jump force
}

// Listen for user input to make the chick jump
document.addEventListener("keydown", (event) => {
    if (event.key === " ") {
        jump();
    }
});

// Start the game loop
function startGame() {
    setInterval(updateGame, 20);
}

startGame();
