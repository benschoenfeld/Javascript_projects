// Working with Nested Loops
//Ben Schoenfeld
//May 12, 2022
//Some grid-based drawing using nested loops

const SPACING = 5;
let dotSize = 3;

function setup() {
  createCanvas(windowWidth, windowHeight);
  drawGrid();
}

function drawGrid(){
  //use a loop inside of another loop to get a set of (x, y) locations
  for (let x = 0; x < width ; x+= SPACING){ //repeat 5  (0,1,2,4)
    for (let y = 0; y < height ; y+= SPACING){
      //print (x + "," + y);
      strokeWeight(dotSize);
      if(eDistance(x,y, mouseX, mouseY) < 80){
        stroke(255, 0, 0);
      }
      else{
        stroke(0);
      }
      point(x,y);
      
    }
  }
}


function eDistance(x1, y1, x2, y2){
  //return the straight line distance
  let a = abs(x1 - x2);
  let b = abs(y1 - y2);
  let distance = sqrt (pow(a,2) + pow(b,2));
  return distance;
}


function mouseWheel(event){
  print(event.delta);
  //down is positive, up is negative
  if(event.delta < 0){
    dotSize += 1;
  }
  else if (event.delta > 0){
    dotSize -= 1;
  }

  //constrain dotSize to a range
  dotSize = constrain(dotSize, 2, 15);
}



function draw() {
  background(255);
  drawGrid();
} 
