// Movable Markers + Voronoi Diagram
// Ben Schoenfeld
// May 27, 2022
//
// DESCRIBE


let markers = [];
let currentlyDragging = false; //global variable flag for 
//                              if we are currently moving something

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  for(let m of markers){
    m.move();
    m.display();
  }
}

function keyPressed(){
  if(key===" "){
    markers.push(new MovableMarker(mouseX, mouseY));
  }
}

class MovableMarker{
  //something like a pin that can placed/moved on a map
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.offX = 0;
    this.offY = 0;  //used for when dragging not from the center
    this.baseColor = color(255,0,0);
    this.hoverColor = color(200,0,0);
    this.beingDragged = false; 
    this.radius = 7;
    this.diameter = this.radius * 2;
  }


  //class Methods
  move(){
    if(this.mouseIsOver() && currentlyDragging === false){
      if(mouseIsPressed && mouseButton === LEFT){
        this.beingDragged = true;
        currentlyDragging = true; //prevent other objects from being dragged
        this.offX = mouseX - this.x;
        this.offY = mouseY - this.y;
      }
    }
    //check if drag is over
    if (!mouseIsPressed){
      this.beingDragged = false;
      currentlyDragging = false;
    }

    if(this.beingDragged){
      this.x = mouseX - this.offX ;
      this.y = mouseY - this.offY;
    }

  }

  display(){
    if(this.mouseIsOver()){
      fill(this.hoverColor);
    }
    else{  //no hover
      fill(this.baseColor);
    }
    circle(this.x, this.y, this.diameter);
  }

  mouseIsOver(){
    //return true if the mouse is hovering over this shape
    let d = dist(mouseX, mouseY, this.x, this.y);
    if(d <= this.radius){
      return true; //mouse is hovering over this object
    }
    else{
      return false;
    }
  }
  

}