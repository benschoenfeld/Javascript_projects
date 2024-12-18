// Movable Markers + Voronoi Diagram
// Ben Schoenfeld
// May 27, 2022
//
// Use the properties of a Voronoi diagram to determine the
// optimal distance between schools - including moveable markers
//
//Expert: Add a star to indicate the new building at the appropiate position (inherit from Markers)

let markers = [];
let currentlyDragging = false; //global variable flag for 
//if we are currently moving something

let gridSize = 10;
let activeRender = true;

function preload() {
  img = loadImage('assets/SaskatoonSection.png')
}


function setup() {
  createCanvas(img.width, img.height);
}

function draw() {
  background(220);
  image(img, 0, 0);
  drawVoronoi();
  for (let m of markers) {
    m.move();
    m.display();
  }
}



function drawVoronoi() {
  //render a voronoi diagram based on the 
  //objects stored in markers

  for (let m of markers) {
    m.resetCount();
  }

  if (activeRender) {
    noStroke();
    for (let x = 0; x < width; x += gridSize) {
      for (let y = 0; y < height; y += gridSize) {
        setFill(x, y);
        square(x, y, gridSize);
      }
    }
  }
}

function setFill(x, y) {
  //given a particular location (x,y), determine the
  //closest marker and fill value to its region color

  let minDist = -1;
  let minIndex = -1;
  for (let i = 0; i < markers.length; i++) {
    let currentDist = dist(x, y, markers[i].x, markers[i].y); // minDist = 25  current = 25
    if (currentDist < minDist || minDist === -1) {
      minDist = currentDist;
      minIndex = i;
    }
  }
  if (minIndex !== -1) { // indicates there is atleast one marker
    fill(markers[minIndex].regionColor);
    markers[minIndex].regionAdd();  //+1 to the count

  } else {
    fill(200);


  }
}

// space for circle marler    s for star marker
function keyPressed() {
  if (key === "s") {
    markers.push(new Star(mouseX, mouseY))
  }
  if (key === " ") {
    markers.push(new MovableMarker(mouseX, mouseY));
  }
  if (keyCode === 16) { //left shift
    activeRender = !activeRender;[]
  }
}

class MovableMarker {
  //something like a pin that can placed/moved on a map
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.offX = 0;
    this.offY = 0;  //used for when dragging not from the center
    this.baseColor = color(255, 0, 0);
    this.hoverColor = color(200, 0, 0);
    this.beingDragged = false;
    this.radius = 7;
    this.diameter = this.radius * 2;

    //regions
    this.regionColor = color(random(255), random(255), random(255), 150);
    this.regionArea = 0;
  }


  //class Methods
  move() {
    if (this.mouseIsOver() && currentlyDragging === false) {
      if (mouseIsPressed && mouseButton === LEFT) {
        this.beingDragged = true;
        currentlyDragging = true; //prevent other objects from being dragged
        this.offX = mouseX - this.x;
        this.offY = mouseY - this.y;
      }
    }
    //check if drag is over
    if (!mouseIsPressed) {
      this.beingDragged = false;
      currentlyDragging = false;
    }

    if (this.beingDragged) {
      this.x = mouseX - this.offX;
      this.y = mouseY - this.offY;
    }

  }

  display() {
    stroke(0);
    if (this.mouseIsOver()) {
      fill(this.hoverColor);
    }
    else {  //no hover
      fill(this.baseColor);
    }
    circle(this.x, this.y, this.diameter);
    fill(0);
    text(round(this.regionArea / (width / gridSize * height / gridSize) * 100), this.x, this.y + 20);
  }

  mouseIsOver() {
    //return true if the mouse is hovering over this shape
    let d = dist(mouseX, mouseY, this.x, this.y);
    if (d <= this.radius) {
      return true; //mouse is hovering over this object
    }
    else {
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



//// Star Class for star-shaped marker
class Star extends MovableMarker {
  constructor(x, y) {
    super(x, y);

  }

  display() {
    fill(0, 0, 255);
    star(this.x, this.y, 5, 15, 5)
    text(round(this.regionArea / (width / gridSize * height / gridSize) * 100), this.x, this.y + 20);
  }
}

function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
