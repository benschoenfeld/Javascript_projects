// Cars Cars Cars
// Ben Schoenfeld
// May 18th, 2022
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  drawRoad();
}

function drawRoad(){
  noStroke();
  fill(0);
  rect(0, height/4, width, height/2);

  for (let x = 0; x < width; x += 50){
    stroke(255);
    strokeWeight(10);
    line(x, windowHeight/2, x + 30, windowHeight/2);
  }
}