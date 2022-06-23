// Image Manipulation
// Ben Schoenfeld
// June 22, 2022
//
// Load an image and mirror the left half over the right half. Create a
// horizontal reflection.

function preload() {
  sourceImage = loadImage("assets/hand.jpg");
}

function setup() {
  createCanvas(sourceImage.width, sourceImage.height);
}

function draw() {
  sourceImage.loadPixels();
  background(220);

  for (let x = 0; x < width / 2; x++) {
    for (let y = 0; y < height; y++) {
      let location = (x + y * sourceImage.width) * 4;
      let destination = ((width - 1 - x) + y * sourceImage.width) * 4;

      sourceImage.pixels[destination] = sourceImage.pixels[location];
      sourceImage.pixels[destination + 1] = sourceImage.pixels[location + 1];
      sourceImage.pixels[destination + 2] = sourceImage.pixels[location + 2];
    }
  }
  sourceImage.updatePixels();
  image(sourceImage, 0, 0);
}
