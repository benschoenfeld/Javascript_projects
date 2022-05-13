// Perlin Noise Demo
// Ben Schoenfeld
// May 13, 2022
// A possible refinement on our use of unpredictability

let squareX;
let colorTime = 999; //starting spot in noise graph
let colorSpeed = 0.01; //increment moving through noise graph 

let squareTime;
let squareSpeed = 0.1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  squareX = width / 2
  squareTime = random(100);
}

function draw() {
  background(220);
  colorCircle();
  moveSquare();
}

function moveSquare() {
  //a square (constant color and size) with random x location
  fill(255);
  //version One - random()
  //squareX += random(-15, 15);
  
  //Version Two - noise()
  let xSpeed = noise(squareTime);
  squareTime += squareSpeed;
  xSpeed = map(xSpeed, 0, 1, -15, 15);
  squareX += xSpeed;

  squareX = constrain(squareX, width / 2, width * 0.8);
  square(squareX, height / 2, 75);
}

function colorCircle() {
  //a circle (constant size and location) with random color each frame
  //Version One - random()
  //fill(random(255), random(255), random(255));
  //    ( noise,       255 - noise, 0)
  //Version Two - noise()
  let currentColor = noise(colorTime) * 255;    //0-255
  fill(currentColor, 255 - currentColor, currentColor);
  colorTime += colorSpeed;

  circle(width * 0.2, height / 2, 75);
}

