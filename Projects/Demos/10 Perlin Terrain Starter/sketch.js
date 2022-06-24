// Perlin Terrain Starter
// Ben Schoenfeld
// May 13, 2022

let rectWidth = 30; //segment width

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CORNERS);
  background(255);
  regularRandomTerrain();
}

function draw() {
  
}

function regularRandomTerrain(){
  //using random() generate a series of rectangles (rectWidth wide)
  //of varying heights
  fill(0);
  for (let x = 0; x < width; x += rectWidth){
    let sectionHeight = random(0, height);
    rect(x, height, x + rectWidth, height - sectionHeight);
  }
}