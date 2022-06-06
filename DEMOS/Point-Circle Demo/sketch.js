// Point-Cirlce Collision Demo
let cX = 500;  let cY = 300;
let cDiameter = 250;
let cRadius = cDiameter/2;

// Point: use mouseX, mouseY

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);

  //is the distance between the mouse pointer
  //and the circle's centerpoint (cX, cY) < radius
  if(dist(mouseX, mouseY, cX, cY) < cRadius){
    fill(255, 0, 255);
  } else {
    fill(255);
  }
  ellipse(cX, cY, cDiameter, cDiameter);
}
