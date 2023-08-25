// Filename: creative_code.js

// This code is a simple game called "Catch the Falling Fruit"
// The player has to catch the falling fruit using the left and right arrow keys
// The player gets points for each fruit caught successfully and loses a life when a fruit is missed
// The game ends when the player loses all their lives

// Initialize canvas and context
const canvas = document.createElement('canvas');
canvas.width = 800;
canvas.height = 600;
document.body.appendChild(canvas);
const ctx = canvas.getContext('2d');

// Game variables
let score = 0;
let lives = 3;
let isGameOver = false;

// Player variables
const player = {
  x: canvas.width / 2,
  y: canvas.height - 50,
  width: 50,
  height: 50
};

// Fruit variables
let fruits = [];
const fruitWidth = 30;
const fruitHeight = 30;
const fruitSpeed = 2;

// Keyboard event listeners
document.addEventListener('keydown', handleKeyDown);
document.addEventListener('keyup', handleKeyUp);

// Handle keydown events
function handleKeyDown(event) {
  if (event.code === 'ArrowLeft') {
    player.isMovingLeft = true;
  } else if (event.code === 'ArrowRight') {
    player.isMovingRight = true;
  }
}

// Handle keyup events
function handleKeyUp(event) {
  if (event.code === 'ArrowLeft') {
    player.isMovingLeft = false;
  } else if (event.code === 'ArrowRight') {
    player.isMovingRight = false;
  }
}

// Update player position
function updatePlayer() {
  if (player.isMovingLeft) {
    player.x -= 5;
  }
  if (player.isMovingRight) {
    player.x += 5;
  }

  // Boundaries for player movement
  if (player.x < 0) {
    player.x = 0;
  }
  if (player.x + player.width > canvas.width) {
    player.x = canvas.width - player.width;
  }
}

// Update fruit position and check for collision
function updateFruits() {
  for (let i = 0; i < fruits.length; i++) {
    fruits[i].y += fruitSpeed;

    // Check for collision with player
    if (
      fruits[i].x < player.x + player.width &&
      fruits[i].x + fruitWidth > player.x &&
      fruits[i].y < player.y + player.height &&
      fruits[i].y + fruitHeight > player.y
    ) {
      // Collision detected, remove fruit and increase score
      fruits.splice(i, 1);
      score++;
    }

    // Check if fruit reached bottom of the canvas
    if (fruits[i] && fruits[i].y + fruitHeight > canvas.height) {
      // Fruit missed, remove fruit and decrease lives
      fruits.splice(i, 1);
      lives--;

      // Check if the player lost all lives
      if (lives === 0) {
        isGameOver = true;
      }
    }
  }
}

// Draw player
function drawPlayer() {
  ctx.fillStyle = '#f00';
  ctx.fillRect(player.x, player.y, player.width, player.height);
}

// Draw fruits
function drawFruits() {
  for (let i = 0; i < fruits.length; i++) {
    ctx.fillStyle = '#0f0';
    ctx.fillRect(fruits[i].x, fruits[i].y, fruitWidth, fruitHeight);
  }
}

// Draw score and lives
function drawHUD() {
  ctx.fillStyle = '#000';
  ctx.font = '24px Arial';
  ctx.fillText('Score: ' + score, 10, 30);
  ctx.fillText('Lives: ' + lives, canvas.width - 100, 30);

  if (isGameOver) {
    ctx.fillText('GAME OVER', canvas.width / 2 - 80, canvas.height / 2);
  }
}

// Game loop
function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (!isGameOver) {
    updatePlayer();
    updateFruits();
    drawPlayer();
    drawFruits();
    drawHUD();
  }

  requestAnimationFrame(gameLoop);
}

// Initialize fruits
function initFruits() {
  setInterval(() => {
    fruits.push({
      x: Math.random() * (canvas.width - fruitWidth),
      y: 0
    });
  }, 2000);
}

// Start game
function startGame() {
  initFruits();
  gameLoop();
}

// Run the game
startGame();