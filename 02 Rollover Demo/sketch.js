// Project Title

let currentSide = 0; //0 - mouse on left side
                    // 1 - mouse on right side
let rightFillValue = 0;                   

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  updateState();
  renderSquares()
  
  
}

function updateState(){
  // check mouse position, and update currentSide accordingly
  if (mouseX < width/2, currentSide = 0);
  else if (mouseX >= width/2) currentSide = 1;
  //print(currentSide);
}

function renderSquares(){
  //left square
  if (currentSide === 0){
    fill(0);
  }
  else fill(255);
  rect(0,0,width/2, height);

  //right square
  print(rightFillValue);
  rightFillValue += 2;  //update the variable???
  fill(rightFillValue); //use variable to set fill
  rect(width/2, 0, width/2, height); //draw shape
}

function mousePressed(){
  rightFillValue -= 50;  //rightFillValue = rightFillValue
}