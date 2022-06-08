// Target Game
// Ben Schoenfeld
// June 6, 2022


// Images to load 
let backImage, backImageReport, barrelImage;
let baseImage, cannonballImage, targetImage;
let explosionImages = [];
let shotsRemainingImages = [];
let targetsHitImages = [];

let currentGame;

function setup() {
  createCanvas(windowWidth, windowHeight);
  currentGame = new Game();
}

function draw() {
  background(0);
  currentGame.play();
  quickInput();
}

// press space to take a shot after determining power
function keyPressed() {
  if (key === " ") {
    currentGame.createShot();
  }
}


function quickInput() {
  //change cannon angle with left/right arrow keys
  if (keyIsDown(LEFT_ARROW)) {
    currentGame.changeAngle(true);
  }
  if (keyIsDown(RIGHT_ARROW)) {
    currentGame.changeAngle(false);
  }
  // Change the power with the up/down arrow keys
  if (keyIsDown(UP_ARROW)) {
    currentGame.changePower(true);
  }
  if (keyIsDown(DOWN_ARROW)) {
    currentGame.changePower(false);
  }
}