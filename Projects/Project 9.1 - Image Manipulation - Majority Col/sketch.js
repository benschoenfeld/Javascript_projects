// Image Manipulation - Majority Color
// Ben Schoenfeld
// June 20, 2022
//

function preload() {
  sourceImage = loadImage("assets/chip.jpg");
}

function setup() {
  createCanvas(600, 600);
}

// function average(location) {
//   //return the average value of r/g/b starting at location
//   let r = video.pixels[location];
//   let g = video.pixels[location+1];
//   let b = video.pixels[location+2];
//   return (r+g+b)/3;
//}

function draw() {
  sourceImage.loadPixels();
  background(0);


  //loop through all the pixels, and then apply some effect
  for (let x = 0; x < sourceImage.width; x++) {
    for (let y = 0; y < sourceImage.height; y++) {
      let pos = (x + y * sourceImage.width) * 4;
      if (sourceImage.pixels[pos] >= sourceImage.pixels[pos + 1] && sourceImage.pixels[pos] >= sourceImage.pixels[pos+2]) {
        setPixelRed(pos);
      }
      else if (sourceImage.pixels[pos+1] >= sourceImage.pixels[pos] && sourceImage.pixels[pos+1] >= sourceImage.pixels[pos+2]) {
          setPixelGreen(pos);
        }
        else if (sourceImage.pixels[pos+2] >= sourceImage.pixels[pos] && sourceImage.pixels[pos+2] >= sourceImage.pixels[pos+1]) {
          setPixelBlue(pos);
        }
        

    }
  }
  sourceImage.updatePixels();
  image(sourceImage, 0, 0);
}

function setPixelRed(pos) {
  sourceImage.pixels[pos] = (255);
  sourceImage.pixels[pos + 1] = (0);
  sourceImage.pixels[pos + 2] = (0);

}

function setPixelGreen(pos) {
  sourceImage.pixels[pos] = (0);
  sourceImage.pixels[pos + 1] = (255);
  sourceImage.pixels[pos + 2] = (0);

}

function setPixelBlue(pos) {
  sourceImage.pixels[pos] = (0);
  sourceImage.pixels[pos + 1] = (0);
  sourceImage.pixels[pos + 2] = (255);

}

