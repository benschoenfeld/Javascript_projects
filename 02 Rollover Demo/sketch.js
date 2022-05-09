// Rollovers
//Ben Schoenfeld
//May 9th, 2022
//Moving the cursor into into any of the four tiles and change the colour


//Global varibales for each quadrant
let fillTopLeft = 255;
let fillBottomLeft =255;
let fillTopRight = 255;
let fillBottomRight = 255;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  drawQuadrants();
  changeColours();
  
}
function drawQuadrants(){
  fill(255);
  stroke(10);
  //top left
  fill(fillTopLeft);
  rect(0,0, width/2, height/2);
  //top right
  fill(fillTopRight);
  rect(width/2, 0, width/2, height/2);
  //bottom left
  fill(fillBottomLeft);
  rect(0, height/2, width/2, height/2);
  //bottom right
  fill(fillBottomRight);
  rect(width/2, height/2, width/2, height/2);

}
function changeColours(){
  fillBottomLeft += 8;
  fillBottomRight += 8;
  fillTopLeft += 8;
  fillTopRight += 8;
//if statements to determine cursor position

//bottom right
if (mouseX > width / 2 && mouseY > height / 2) {
  fillBottomRight = 0;
}
//bottom left
if (mouseX < width /2 && mouseY > height/2){
  fillBottomLeft = 0;
}
//top right
if (mouseX > width/2 && mouseY < height /2){
  fillTopRight = 0;
}
//top left
if (mouseX < width /2 && mouseY < height/2){
  fillTopLeft = 0;
}

}