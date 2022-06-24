// 2D Collision Library Demo
//values for the box
let boxX = 300;  let boxY = 150;
let boxLength = 300;  let boxHeight = 70;

// circle position will be mouseX, mouseY
let circleDiameter = 120;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noCursor();
  rectMode(CORNER);
  ellipseMode(CENTER);
}

function draw() {
  background(220);

  //draw Box
  if(collideRectCircle(boxX, boxY, boxLength, boxHeight, mouseX, mouseY, circleDiameter)) {
    fill(255, 255, 0);
  } else{
    fill(255);
  }
  rect(boxX, boxY, boxLength, boxHeight);

  //draw Circle
  fill(255, 150);
  ellipse(mouseX, mouseY, circleDiameter, circleDiameter);
}
