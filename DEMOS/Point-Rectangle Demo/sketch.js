// Point-Rectangle Collision Demo
let rX = 200;  let rY =150;
let rWidth = 300;  let rHeight = 100;
let rLeft = rX;  let rTop = rY;
let rRight = rX + rWidth;  let rBottom = rTop + rHeight;

// Point: use mosueX, mouseY

function setup() {
  createCanvas(windowWidth, windowHeight);
  //rectMode(CORNER) -> default
}

function draw() {
  background(220);
  fill(255);
  // if mouseX > left AND mouseX < right
  if(mouseX > rLeft && mouseX < rRight) {
    //mouseY > top AND mouseY < bottom
    if(mouseY > rTop && mouseY < rBottom) {
      fill(200, 54, 196);
    }
  }

  rect(rX, rY, rWidth, rHeight);
}
