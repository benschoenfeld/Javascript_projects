// Perlin Terrain Generator
// Ben Schoenfeld
// May 16th, 2022
//
// Create a random range of rectangles to resemble a terrain
//use noise() to create random height values
//have the program place a flag on the tallest rectangle


let rectWidth = 10;
let rectPlacement;



function setup() {
  createCanvas(windowWidth, windowHeight);
  rectPlacement = random(100);
  rectMode(CORNERS);
  regularRandomTerrain();
}

function draw() {
  increaseSize();
  clearScreen();
}

//function that creates the random terrain
function regularRandomTerrain() {
  background(255);
  fill(0);

  let highest = 0;
  let highestX = 0;


  for (let x = 0; x < width; x += rectWidth) {
    let sectionHeight = noise(rectPlacement) * height ;
    rectPlacement += 0.03;
    rect(x, height, x + rectWidth, height - sectionHeight);
    if (highest <= sectionHeight){
      highestX = x;
      highest = sectionHeight;

    
    }

  }
  flagPlaced(highestX, height - highest);
}



function clearScreen() {
  //clear the canvas with spacebar
  if (keyIsDown(32)) {
    clear()
    regularRandomTerrain();

  }

}

//increase or decrease the size by clicking left or right arrows
function increaseSize() {

  if (keyIsDown(37)) {
    rectWidth -= 2;
    regularRandomTerrain();
  }
  else if (keyIsDown(39)) {
    rectWidth += 2;
    regularRandomTerrain();
  }
  rectWidth = constrain(rectWidth, 10, 50);
}

function flagPlaced(x,y){
  stroke(0);
  line(x,y,x, y-50);
  fill(255, 0, 0);
  triangle(x,y-30, x, y-60, x+20, y-45);

}