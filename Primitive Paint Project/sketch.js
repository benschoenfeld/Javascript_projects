// Primitive Paint Project
// Ben Schoenfeld
// May 10th, 2022

//Global Variables:
let extraCanvas;
let colValue = 0;


function setup() {
  createCanvas(windowWidth, windowHeight);
  extraCanvas = createGraphics(width, height);
}

function draw() {
  gradientBackground();
  changeColor();
  image(extraCanvas, 0, 0);
  drawName();
  colorPicker();
  wipeArt();
}

//allow the program to read the input from the user
function keyPressed() {
  print(key);
  if (key === 'a') {
    extraCanvas.fill(colValue);
    extraCanvas.rect(mouseX, mouseY, 50, 50);
  }
  if (key === 's') {
    extraCanvas.fill(colValue);
    extraCanvas.ellipse(mouseX, mouseY, 60, 60);

  }
  if (key === 'd') {
    extraCanvas.fill(colValue);
    extraCanvas.triangle(mouseX, mouseY, mouseX + 25, mouseY - 50,
      mouseX + 50, mouseY);
  }
}

//change colour with number keys
function changeColor() {
  
  if (key === '1' && keyIsPressed) {
    colValue = color( random(255), 0, 0);
    print(colValue);
  }
  if (key === '2' && keyIsPressed) {
    colValue = color(0, random(255), 0);
    print(colValue);
  }
  if (key === '3' && keyIsPressed) {
    colValue = color(0, 0, random(255));
    print(colValue);
  }
}

//add in a gradiented background
function gradientBackground() {
  let spacing = 1;
  noStroke();
  for (let y = height; y > 0; y -= spacing) {
    rect(0, y, width, spacing);
    let currentColour = map(y, 0, height, 0, 255);
    fill(100, currentColour, 200);
  }
}

//sign the canvas
function drawName(){
  noStroke();
  fill(255);
  textFont('Georgia');
  textSize(20);
  text('Ben Schoenfeld', 30, 50);

}

function colorPicker(){
  stroke(255);
  fill(colValue);
  rect( width - 100, height -100, 50, 50);
}

function wipeArt(){
  if (keyIsDown(32)){
    etraCanvas.clear();
    print("cleared")
  }
}