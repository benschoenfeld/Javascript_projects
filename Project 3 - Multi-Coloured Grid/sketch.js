// Multi-colored Grid
// Ben Schoenfeld
// May 12, 2022
//
//Design a grid that creates a very colorful grid
let SPACING = 15;


function setup() {
  createCanvas(windowWidth, windowHeight);
  drawGrid();
}

function draw() {
  //background(255);
colorRefresh();
}


function drawGrid() {
  //use a loop inside of another loop to get a set of (x, y) locations
  for (let x = 0; x < width; x += SPACING) { //repeat 5  (0,1,2,4)
    for (let y = 0; y < height; y += SPACING) {
      //only random from range of (random red and random blue)
      fill(random(255), 0, random(255));
      rect(x,y,SPACING);
    }
  }
}

function mousePressed(){
  //increase of decrease the size of the squares with mouse clicks
  if (mouseButton === LEFT && mouseIsPressed) {
    SPACING -= 1;
    print(SPACING);
  }
  if (mouseButton === CENTER && mouseIsPressed){
    SPACING += 1;
    print(SPACING);
  }
  drawGrid();
}

function colorRefresh(){
  //refresh the canvas with new colors
  if (key === " "  && keyIsPressed){
    drawGrid();  
    print("refreshed");
  }

}