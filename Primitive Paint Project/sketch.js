// Primitive Paint Project
// Ben Schoenfeld
// May 10th, 2022
//
// Extra for Experts:
// - 

//Global Variables:
let extraCanvas;
let colValue = 0;



function setup() {
  createCanvas(windowWidth, windowHeight);
  extraCanvas = createGraphics(width, height);
}

function draw() {
  background(255);
  changeColor();
  image(extraCanvas, 0, 0);
}


function keyPressed(){ print (key);
  if (key === 'a'){
    extraCanvas.fill(colValue);
    extraCanvas.rect(mouseX, mouseY, 50, 50);
  }  
  if (key === 's'){
    extraCanvas.fill(colValue);
    extraCanvas.ellipse(mouseX, mouseY, 60, 60);

  }
  if (key === 'd'){
    extraCanvas.fill(colValue);
    extraCanvas.triangle(mouseX, mouseY, mouseX + 25, mouseY - 50,
       mouseX + 50, mouseY );
  }
}


function changeColor(){
  if (key === 9){
      colValue = colValue + 10;
      print(colValue);
  }
  if (key === 20){
      colValue = 255;
      print(colValue)
  }




}