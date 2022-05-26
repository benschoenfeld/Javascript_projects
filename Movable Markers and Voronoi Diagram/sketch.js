// Moveable Markers + Voronoi Diagram
// Ben S
// May 26, 2022
// for a map placement problem...

let markers = [];
let currentlyDragging = false; //global variable flag 

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  for (let m of markers) { //loops through all objects in markers
    m.move();
    m.display();
  }
}

function keyPressed() {
  if (key === " ") {
    markers.push(new MoveableMarker(mouseX, mouseY));
  }
}



class MoveableMarker {
  //something like a pin that can be placed/moved on a map

  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.offX = 0; this.offY = 0;
    this.baseColor = color(0, 255, 0);
    this.hoverColor = color(0, 180, 0);
    this.beingDragged = false;
    this.radius = 7;
    this.diameter = this.radius * 2;


  }

  //class methods()
  move() {
    if(this.mouseIsOver() && currentlyDragging === false) {
      if(mouseIsPressed && mouseButton === LEFT) {
        this.beingDragged = true;
        this.offX = mouseX - this.x;
        this.offY = mouseY - this.y;
        currentlyDragging = true;
      }
    }

    //check if the drag is over
    if(!mouseIsPressed) {
      this.beingDragged = false;
      currentlyDragging = false;

    }

    if(this.beingDragged) {
      this.x = mouseX - this.offX;
      this.y = mouseY - this.offY;
    }

  }

  display() {
    if(this.mouseIsOver()) {
      fill(this.hoverColor);
    } else {
      fill(this.baseColor);
    }
    circle(this.x, this.y, this.diameter);
  }

  mouseIsOver() {

    let d = dist(mouseX, mouseY, this.x, this.y);
    if (d <= this.radius) {
      return true;
    } else {
      return false;
    }

  }
}