// Objects Demo Two
// Ben Schoenfeld
// May 18th, 2022
// A second look at defining our own classes
// include a look at "enhanced" for loop

let dotCollection = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  initDots();
}

function initDots(){
  //use this to generate a whole bunch of DOT objects using while loops
  let spacing = 12;
  let currentX = spacing/2;
  let currentY = spacing/2;
  while(currentX < width){
    while(currentY < height){
      dotCollection.push(new Dot(currentX, currentY, 10));
      currentY += spacing;
    }
    currentY = spacing/2;
    currentX += spacing;
  }

}

function draw() {
  background(220);

  for(let d of dotCollection){
    //d temporarily stores each item
    //cant really handle removals well
    d.process();
  }
  
}

function mousePressed(){
  dotCollection.push(new Dot(mouseX, mouseY, 10));
}


// Class Definition
class Dot {
  //Class constructor (inc. properties)
  constructor(x, y, diameter) {
    this.x = x;
    this.y = y;
    this.diameter = diameter;
    this.c = color(255, 255, 255);
  }


  // Class Methods
  display() {
    fill(this.c);
    circle(this.x, this.y, this.diameter);
  }


  setSize(d){     //setting function
    this.diameter = d;
  }

  sizeBasedOnDistance(){
    let distance = dist(this.x, this.y, mouseX, mouseY);
      let windowDiagonal = dist(0, 0, width, height); //should be in setup
      let newDiameter = map(distance, 0, windowDiagonal, 15, 2);
      this.setSize(newDiameter);
  }

  process() {
    //internally call the neccesary class methods once per frame
    this.display();
    this.sizeBasedOnDistance();

  }
}