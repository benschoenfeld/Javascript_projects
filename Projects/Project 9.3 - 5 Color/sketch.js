// Image Manipulation - Five-Color Posterize
// Ben Schoenfeld
// June 22, 2022
//
// Look at the image's average intensity and overwrite the value with 
// Five possible set colors.

function preload() {
  sourceImage = loadImage("assets/nuit.jpg")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  sourceImage.loadPixels();
  background(220);

  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      let location = (x + y * sourceImage.width) * 4;
      let avg = average(location);

      if (avg >= 205 && avg < 255) {
        sourceImage.pixels[location] = 170;
        sourceImage.pixels[location + 1] = 230;
        sourceImage.pixels[location + 2] = 220;
      }

      if (avg >= 155 && avg < 204) {
        sourceImage.pixels[location] = 105;
        sourceImage.pixels[location + 1] = 150;
        sourceImage.pixels[location + 2] = 210;
      }

      if (avg >= 105 && avg < 154) {
        sourceImage.pixels[location] = 120;
        sourceImage.pixels[location + 1] = 180;
        sourceImage.pixels[location + 2] = 60;
      }

      if (avg >= 55 && avg < 104) {
        sourceImage.pixels[location] = 130;
        sourceImage.pixels[location + 1] = 30;
        sourceImage.pixels[location + 2] = 130;
      }

      if (avg >= 0 && avg < 54) {
        sourceImage.pixels[location] = 90;
        sourceImage.pixels[location + 1] = 10;
        sourceImage.pixels[location + 2] = 50;
      }
    }
  }
  sourceImage.updatePixels();
  image(sourceImage, 0, 0);

}

function average(location) {
  //return the average value of r/g/b starting at location
  let r = sourceImage.pixels[location];
  let g = sourceImage.pixels[location + 1];
  let b = sourceImage.pixels[location + 2];
  return (r + g + b) / 3;
}