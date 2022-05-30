// Movable Markers + Voronoi Diagram
// Ben Schoenfeld
// May 27, 2022
//
// DESCRIBE

let markers = [];
let currentlyDragging = false; //global variable flag for 
//                              if we are currently moving something

let gridSize = 10;

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(220);
  drawVoronoi();
  for(let m of markers){
    m.move();
    m.display();
  }
}



function drawVoronoi() {
  //render a voronoi diagram based on the onjects stored in markers
noStroke();
  for (let x = 0; x < width; x+= gridSize) { 
    for (let y = 0; y < height; y += gridSize) {
      setFill(x,y);
      square(x,y,gridSize);
    }
  }
}

function setFill(x, y) {
  //given a particular location (x,y), determine the
  //closest marker and fill value to its region color

  let minDist = -1;
  let minIndex = -1;
  for(let i = 0; i < markers.length; i++) {
    let currentDist = dist(x, y, markers[i].x, markers[i].y); // minDist = 25  current = 25
    if (currentDist < minDist || minDist === -1) {
      minDist = currentDist;
      minIndex = i;
    }
  }
  if (minIndex !== -1) { // indicates there is atleast one marker
    fill(markers[minIndex].regionColor);

  } else {
    fill(200);


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

    //regions
    this.regionColor = color(random(255), random(255), random(255), 150);
    this.regionArea = 0;
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
    stroke(0);
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
  
  regionAdd() {
    //increase the count of squares closest to point
    this.regionArea++;

  }

  resetCount() {
    this.regionArea = 0;
  }




}