// Video Stream and Effects
// Mr. Scott
// Can we get the webcam video source to work?
//

let video;
let GRID_SPACING = 10;

function setup() {
  video = createCapture(VIDEO);
  video.hide();
  createCanvas(640, 480);
  textSize(GRID_SPACING);
}

function draw() {
  //used for the ASCII Video Filter Effect
  video.loadPixels();
  background(0);

  for (let x = 0; x < video.width; x += GRID_SPACING) {
    for (let y = 0; y < video.height; y += GRID_SPACING) {
      let location = (x + y*video.width) * 4;  //r position for (x,y) pixel
      let avg = average(location);

      //option 1 - circles
      // fill(avg);
      // circle(x,y,GRID_SPACING);

      //option 2 - text
      drawCharacter(x,y,avg);
    }
  }
}

function drawCharacter(x,y,avg) {
  //inspect the current average intensity and pick a character to 
  //display at (x,y) to approximate the overalll brightness. Drawb on BLACK
  fill(255);
  //pick character based on brightness
  if (avg > 220) text("@", x,y);
  else if (avg > 180) text ("Q", x, y);
  else if (avg > 130) text ("t", x, y);
  else if (avg > 80) text ("=", x, y);
  else if (avg > 40) text (",", x, y);
  
}

function average(location) {
  //return the average value of r/g/b starting at location
  let r = video.pixels[location];
  let g = video.pixels[location+1];
  let b = video.pixels[location+2];
  return (r+g+b)/3;
}

function multiVideo() {
  //display several videos in a 2D grid
  for (let x = 0; x < width; x += GRID_SPACING) {
    for (let y = 0; y < height; y += GRID_SPACING) {
      image(video, x, y, GRID_SPACING, GRID_SPACING);
    }
  }
}

function setPixelColor(pos, r, g, b) {
  video.pixels[pos] = r;
  video.pixels[pos + 1] = g;
  video.pixels[pos + 2] = b;
}

function magnify() {
  //magnify the video feed at the cursor location (on click)
  if (mouseIsPressed) {
    let cursorRegion = video.get(mouseX - 25, mouseY - 25, 50, 50);
    imageMode(CENTER);
    image(cursorRegion, mouseX, mouseY, cursorRegion.width * 3, cursorRegion.height * 3);
    imageMode(CORNER);
  }
}

function originalDraw() {
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

  magnify();
}
