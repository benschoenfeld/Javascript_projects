// Demo 04 - Bouncing Objects
//Ben Schoenfeld
// Make a few primatives bounce around the screen

let circleX, circleY;
let circleXSpeed, circleYSPeed;

function setup() {
  createCanvas(windowWidth, windowHeight);
  circleX = width / 2;
  circleY = height / 2;
  circleXSpeed = random(-3,3);
  circleYSPeed = random(-3,3);
}

function draw() {
  background(220);

  fill(0,200,200);

  //movement
  circleX += circleXSpeed;
  circleY += circleYSPeed;
  


  //bounce/
  if (circleY <= 0 || circleY >= height){
    circleYSPeed = circleYSPeed * -1; //circleYSpeed * -1
  }
  //wrap around (x)
  if (circleX <= 0){
    circleX += width;
  }
  else if (circleX >= width){
    circleX -= width;
  }




  //draw
  rect(circleX, circleY, 30);
}
