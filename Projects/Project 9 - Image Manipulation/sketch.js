// Image Manipulation 
// Ben Schoenfeld
// June 20, 2022
//

function preload() {
  sourceImage = loadImage("assets/chip.jpg");
}
 
function setup() {
  createCanvas(600, 600);
}

function average(location) {
  //return the average value of r/g/b starting at location
  let r = video.pixels[location];
  let g = video.pixels[location+1];
  let b = video.pixels[location+2];
  return (r+g+b)/3;
}

function draw() {
  sourceImage.loadPixels();
  background(0);
  

  //loop through all the pixels, and then apply some effect
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      let pos = (x + y * sourceImage.width) * 4;
      if (sourceImage.pixels[pos] > sourceImage.pixels[pos + 1]) {
        setPixelRed();
      }
    }
  }
  sourceImage.updatePixels();
}

function setPixelRed(pos) {
  sourceImage.pixels[pos] = (255, 0, 0);
  sourceImage.pixels[pos + 1] = (255, 0, 0);
  sourceImage.pixels[pos + 2] = (255, 0, 0);
  sourceImage.pixels[pos + 3] = (255, 0, 0);

}