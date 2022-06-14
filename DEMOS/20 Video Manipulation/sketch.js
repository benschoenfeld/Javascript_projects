// Video Stream and Effects
// Mr. Scott
// Can we get the webcam video source to work?
//

let video;
let GRID_SPACING = 120;

function setup() {
  video = createCapture(VIDEO);
  video.hide();
  createCanvas(640, 480);
}

function multiVideo() {
    //display several videos in a 2D grid
    for(let x = 0; x < width; x+= GRID_SPACING) {
      for (let y = 0; y < height; y+= GRID_SPACING) {
        image(video, x, y, GRID_SPACING, GRID_SPACING);
      }s
    }
}

function setPixelColor(pos, r, g, b) {
  video.pixels[pos] = r;
  video.pixels[pos+1] = g;
  video.pixels[pos+2] = b; 
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
      if(x%10 === 0) {
      setPixelColor(location,255,0,0);
      }
    }
  }
  video.updatePixels();
  image(video,0,0);
}
