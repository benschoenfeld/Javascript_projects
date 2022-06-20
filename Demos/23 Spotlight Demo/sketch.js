// Pixels Array Demo - Spotlight Effect
// Ben Schoenfeld
// June 19, 2022

let sourceImage;
let threshold = 150;

function preload() {
  // sourceImage = loadImage("assets/hand.jpg");  //photo
  sourceImage = createCapture(VIDEO);
  sourceImage.hide();
}
function setup() {
  createCanvas(640, 480);
  pixelDensity(1);
}

function draw() {
  background(220);
  image(sourceImage,0,0);
  imageManipulate();
}

function imageManipulate() {
    //apply a spotlight effect
    loadPixels();
    for(let x = 0; x < sourceImage.width; x++) {
      for (let y = 0; y < sourceImage.height; y++) {
        let loc = (x + y * sourceImage.width) * 4;
        //x,y  to  mouseX, mouseY
        if (dist(x,y, mouseX, mouseY) > threshold) {
          setPixelBlack(loc);
        }
      }
    }


    updatePixels();
}

function setPixelBlack(posR) {
  // set the current pixel to pure black
  pixels[posR] = 0;
  pixels[posR+1] = 0;
  pixels[posR+2] = 0;
  pixels[posR+3] = 255;



}