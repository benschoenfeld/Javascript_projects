// Pixels Array Demo
// Threshold Effect 
// June 16, 2022

let sourceImage;
let threshold = 128;

function preload() {
  sourceImage = loadImage("assets/chip.jpg");
}

function setup() {
  createCanvas(600, 600);
}

function draw() {
  threshold = map(mouseX, 0, width,0,255);
  background(220);
  image(sourceImage,0,0);
  loadPixels();

  for (let i = 0; i < pixels.length; i+= 4) {
    let avg = getAverage(i);
    if (avg > threshold) {
      //set this pixel to white
      setPixelWhite(i);
    } else {
      //set this pixel to black
      setPixelBlack(i);
    }
  }

  updatePixels();

}


function getAverage(posR) {
  // return the average intensity of sone particular pixel staring at p
  return (pixels[posR] + pixels[posR+1] + pixels[posR+2]) /3;

}

function setPixelWhite(posR) {
  //set current pixel to pure white
  pixels[posR] = 255;
  pixels[posR+1] = 255;
  pixels[posR+2] = 255;
  pixels[posR+3] = 255;
}

function setPixelBlack(posR) {
  //set current pixel to pure black
  pixels[posR] = 0;
  pixels[posR+1] = 0;
  pixels[posR+2] = 0;
  pixels[posR+3] = 255;

}