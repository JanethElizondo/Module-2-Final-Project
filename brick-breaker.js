let playerScore = 0;
let paddle;
let ball;
let bricks;
let gameState;
let lives = 3;

function setup() {
    createCanvas(1800, 900);
    let colors = createColors();
    gameState = 'playing';
    paddle = new Paddle();
    ball = new Ball(paddle);
    bricks = createBricks(colors);
}

function createColors() {
    const colors = ['red', 'coral', 'gold', 'yellow', 'greenyellow', 'green','mediumturquoise', 'blue', 'cornflowerblue', 'indigo','blueviolet','violet' ];
    return colors
}

function createBricks(colors) {
    const bricks = []
    const rows = 12
    const bricksPerRow = 12
    const brickWidth = width / bricksPerRow
    for (let row = 0; row < rows; row++) {
      for (let i = 0; i < bricksPerRow; i++) {
        brick = new Brick(createVector(brickWidth * i, 25 * row), brickWidth, 25, colors[row])
        bricks.push(brick) 
      }
    }
    return bricks
}

   
function draw() {
    if(gameState === 'playing') {
        background(0);
    
    ball.bounceEdge();
    ball.bouncePaddle();
   
    ball.update();

    if (keyIsDown(LEFT_ARROW)) {
        paddle.move("left");
    } else if (keyIsDown(RIGHT_ARROW)) {
        paddle.move("right");
    }
    for (let i = bricks.length - 1; i >= 0; i--) {
        const brick = bricks[i]
        if (brick.isColliding(ball)) {
          ball.reverse('y')
          bricks.splice(i, 1)
          playerScore += brick.points
        } else {
          brick.display()
        }
    }
 
    paddle.display();
    ball.display();
    

    textSize(30)
    fill(255)
    text(`Score:${playerScore}`, width -160, 50)
    fill(0)
    text(`Lives:${lives}`, width -1750, 50)
    
        
    if(ball.belowBottom()) {
        lives--;
        ball.pos.x = width/2;
        ball.pos.y = height/2;
        if(lives <= 0){
            gameState = "Lose";
        }
    }

    if (bricks.length === 0) {
        gameState = 'Win'
    }
    } else {
        textSize(80)
        gameState === 'Lose' ? fill('orange') : fill(255)
        text(`You ${gameState}!!!`, width/ 2 - 150, height / 2)
    }
}
  
  
