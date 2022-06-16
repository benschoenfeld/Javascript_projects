// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let video;
let GRID_SPACING = 10;

function setup() {
  video = createCapture(VIDEO);
  video.hide();
  createCanvas(640, 480);
  textSize(GRID_SPACING);
}

function average(location) {
  //return the average value of r/g/b starting at location
  let r = video.pixels[location];
  let g = video.pixels[location+1];
  let b = video.pixels[location+2];
  return (r+g+b)/3;
}

function draw() {
  background(0);
  video.loadPixels();  //enables access to the pixel array for our video
  //image(video,0 ,0);
  //multiVideo();

  //loop through all the pixels, and then apply some effect
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      let location = (x + y * video.width) * 4;
      if (x % 10 === 0) {
        setPixelColor(location, 255, 0, 0);
      }
    }
  }
  video.updatePixels();
  image(video, 0, 0);
}

function setPixelColor(pos, r, g, b) {
  video.pixels[pos] = r;
  video.pixels[pos + 1] = g;
  video.pixels[pos + 2] = b;
}