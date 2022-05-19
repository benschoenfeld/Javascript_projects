// Cars Cars Cars
// Ben Schoenfeld
// May 18th, 2022
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let myCars;


function setup() {
  createCanvas(windowWidth, windowHeight);
  let col = color(random(255), random(255), random(255));

}

function draw() {
  background(255);
  drawRoad();
  //myCars.display();
  drawCar();
  
}

function drawRoad() {
  noStroke();
  fill(0);
  rect(0, height / 4, width, height / 2);

  for (let x = 0; x < width; x += 50) {
    stroke(255);
    strokeWeight(5);
    line(x, windowHeight / 2, x + 30, windowHeight / 2);
  }
}


class Cars {
  //class constructor (inc. properties)
  constructor(x, y, diameter) {
    this.x = x;
    this.y = y;
    //this.speed
    this.size = 10;

  }

  // move() {


  // }

  display() {
    rectMode(CENTER);
    fill(this.c)
    rect(this.x, this.y, this.size, this.size);


  }

}


function drawCar() {
noStroke();
if(mouseButton === LEFT && mouseIsPressed) {
   print("LEFT");
    
    fill(100);
    rect(mouseX+5, mouseY-3, 10, 27);
    rect(mouseX+30, mouseY-3, 10, 27);

    fill(255, 0, 0);
    rect(mouseX, mouseY, 45, 20);
  
}
   

}