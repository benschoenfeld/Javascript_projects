// Image Manipulation - No Green
// Ben Schoenfeld
// June 20, 2022
//
// Remove all green components inside of the pixels only on the
// Right half of the screen.

function preload() {
  sourceImage = loadImage("assets/race.jpg");
}

function setup() {
  createCanvas(600, 600);
}

function draw() {
  sourceImage.loadPixels();
  background(0);

  //loop through all the pixels, and then apply some effect
  for (let x = 0; x < sourceImage.width; x++) {
    for (let y = 0; y < sourceImage.height; y++) {
      if (x > sourceImage.width / 2) {
        let pos = (x + y * sourceImage.width) * 4;
        if (sourceImage.pixels[pos + 1] >= 0) {
          removeGreen(pos);
        }
      }
    }
    sourceImage.updatePixels();
    image(sourceImage, 0, 0);
  }
}

// remove all green components
function removeGreen(pos) {
  sourceImage.pixels[pos + 1] = (0);
}

