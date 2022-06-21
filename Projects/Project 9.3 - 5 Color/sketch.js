// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

function preload() {
  sourceImage = image("assets/nuit.jpg")
}


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);

  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      let location = (x + y * video.width) * 4;

    }
  }
}

function average(location) {
  //return the average value of r/g/b starting at location
  let r = video.pixels[location];
  let g = video.pixels[location + 1];
  let b = video.pixels[location + 2];
  return (r + g + b) / 3;
}

function applyFilter(avg) {
  if (avg >= 205 && avg <255) {
    sourceImage.pixels
  }
}
