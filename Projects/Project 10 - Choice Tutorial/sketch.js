// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(640, 360);
}

function draw() {
  //background(51);

  loadPixels();
  for (x = 0; x < width; x++) {
    for (y = 0; y < height; y++) {
      index = x + y * width;
      pixels[index] = color(255, 0, 255);
    }
  }

  updatePixels();
}
