// CS30 - Final Programming Challenge
// Move the Fox - Final Project
// Ben Schoenfeld
// Computer Science 30 - Mr. Scott
// June 24, 2022

// Display a fox on the canvas that is able to move in all four directions
// upon the users interaction with the "w,a,s,d" keys. Change the size of the
// fox with mouse clicks in top/bottom halfs. Enable pepsi mode with "P" for an 
// unpredictable movement pattern and random color change. Press "r" to reset the foxe's
// attributes.


let staticImages = [];      //array to hold 1 image for each direction -> should use this to start  
let animationImages = [];   //array to hold all 8 images in each direction
let x = 250;
let y = 250;
let f = 0;
let size = 1;
let w = 50;
let h = 50;
let b = false;


function preload() {
  loadStatic();     //defined at bottom
  loadAnimation();  //also defined at bottom
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  drawFox(f, x, y, w, h);
  moveFox();
  changeSize();

  //random color/movement when pepsi is toggled on
  if (b === true) {
    x += random(-6, 6);
    y += random(-6, 6);
    tint(random(255), random(255), random(255));
  }
}

function drawFox(f, x, y, w, h) {
  image(animationImages[f], x, y, w, h);
}

// load all static images of the fox
function loadStatic() {
  staticImages.push(loadImage("/assets/left1.png"));   //0 - left
  staticImages.push(loadImage("/assets/right1.png"));   //1 - right
  staticImages.push(loadImage("/assets/up1.png"));   //2 - up
  staticImages.push(loadImage("/assets/down1.png"));   //3 - down
}

// load all animated movement images of the fox walking
function loadAnimation() {
  for (let i = 1; i <= 8; i++) {    //0-7 LEFT
    animationImages.push(loadImage("/assets/left" + i + ".png"))
  }

  for (let i = 1; i <= 8; i++) {  //8-15 RIGHT
    animationImages.push(loadImage("/assets/right" + i + ".png"))
  }

  for (let i = 1; i <= 8; i++) {  //16-23 UP
    animationImages.push(loadImage("/assets/up" + i + ".png"))
  }

  for (let i = 1; i <= 8; i++) {  //24-31 DOWN
    animationImages.push(loadImage("/assets/down" + i + ".png"))
  }
}

// use w,a,s,d keys for movemeny
function moveFox() {

  // UP
  if (key === "w" && keyIsPressed) {
    f = constrain(f, 16, 23)
    print("w");
    f += 1;
    y -= 3;
    if (f > 23 || f < 16) {
      f = 16;
    }
  }

  // LEFT
  if (key === "a" && keyIsPressed) {
    f = constrain(f, 0, 7)
    print("a");
    f += 1;
    x -= 3;
    if (f < 0 || f > 7) {
      f = 0;
    }
  }

  // DOWN
  if (key === "s" && keyIsPressed) {
    f = constrain(f, 24, 31)
    print("s");
    f += 1;
    y += 3;
    if (f < 24 || f >= 31) {
      f = 24;
    }
  }

  // RIGHT
  if (key === "d" && keyIsPressed) {
    f = constrain(f, 8, 15);
    print("d");
    f += 1;
    x += 3;
    if (f < 8 || f > 15) {
      f = 8;
    }
  }
}

// change the size of the fox
function changeSize() {
  // if pointer on top half -> gets larger
  if (mouseY < height / 2 && mouseIsPressed) {
    w += 2;
    h += 2;
    drawFox(f, x, y, w, h);
    print("hello");
  }

  // if pointer on bottom half -> gets smaller
  if (mouseY > height / 2 && mouseIsPressed) {
    w -= 2;
    h -= 2;
    drawFox(f, x, y, w, h);
  }
}

// allows for toggling of pepsi
function pepsi() {
  if (key === "p" && keyIsPressed && b === false) {
    b = true;

  }
  else if (key === "p" && keyIsPressed && b === true) {
    b = false;
  }
}

function keyPressed() {
  pepsi();
  undoEffects();
}

// press "r" for reset
function undoEffects() {
  if (key === "r" && keyIsPressed) {
    let x = 250;
    let y = 250;
    let f = 0;
    let size = 1;
    let w = 50;
    let h = 50;
    let b = false;
    tint(255);
  }
}