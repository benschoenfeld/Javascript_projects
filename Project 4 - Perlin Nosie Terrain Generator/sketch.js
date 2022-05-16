// Perlin Terrain Generator
// Ben Schoenfeld
// May 16th, 2022
//

let rectSpeed = 0.01;
let rectWidth = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CORNERS);
  background(255);
  regularRandomTerrain();
}

function draw() {
  
}

function regularRandomTerrain(){
  
    fill(0);
    for (let x = 0; x < width; x += rectWidth){
      let sectionHeight = noise(0, height);
      rect(x, height, x + rectWidth, height - sectionHeight);
  
  }
}
