// Fractals and 3D Primatives
// one at a time, then together
// Ben Schoenfeld
// June 20, 2022

let timeCounter = 0;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  frameRate(20);
  //noFill();
}

function draw() {
  background(220);
  //makeCircle(width/2, height/2, width/2);
  // rotateX(radians(frameCount));
  orbitControl();
  lights();
  specularMaterial(250);

  //use a loop + coordinate system manipulations to multiply this primitive
  for (let angle = 0; angle < 360; angle += 30) {
    //rotate, then translate, then draw
    if (angle / 30 === timeCounter) {
      push();
      rotateZ(radians(angle));
      translate(-50, 0, 0);
      box(100, 25, 25)

      pop(); //revert back to original coordinate system
    }
  }

  timeCounter++;
  if (timeCounter > 11) {
    timeCounter = 0;
  }
}














// PART ONE - Fractals and Production Rules
function makeCircle(x, y, d) {
  // draw a circle at x,y,   then...
  circle(x, y, d);

  if (d > 10) {
    // recursive calls - at leftmost point
    makeCircle(x - d / 2, y, d * 0.5);
    // recursive call - at rightmost point
    makeCircle(x + d / 2, y, d * 0.5);
    // recursive call - at bottommost point
    makeCircle(x, y + d / 2, d * 0.5);
    makeCircle(x, y - d / 2, d * 0.5);
  }
  else {
    // base case - no recursion
  }
  // if we reach the end, the recursion begins to unravel
}