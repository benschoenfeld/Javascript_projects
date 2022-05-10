// Working with Arrays and Loops
// Ben Schoenfeld
// May 10, 2022
//
// A quick refresher and application of for loops and arrays

//global variables
// Working with Arrays and loops
// Mr. Scott
// May 10, 2022
// A quick refresher and application of for loops and arrays

//global variables
let x = [];   //empty arrays
let y = [];
const NUM_SEGMENTS = 40;
const SPEED = 10;


function setup() {
  createCanvas(windowWidth, windowHeight);
  initArrays();
}

function draw() {
  background(220);
  updateArrays();
  drawArrays();
}

function initArrays(){
  //populate data into the x and y arrays. (initial values)
  let x1 = width/2;
  let y1 = height/2;
  x.push(x1);
  y.push(y1);

  for(let i = 0; i < NUM_SEGMENTS-1; i++){
    x.push(x1 + random(-SPEED, SPEED));
    y.push(y1 + random(-SPEED, SPEED));
  }
}

function drawArrays(){
  //traverse the parallel arrays, draw some circles and connect them
  for (let i = 0; i < x.length; i++){
    fill(0);
    circle(x[i], y[i], 4);

    line (x[i], y[i], x[i+1], y[i+1]);

  }
}

function updateArrays(){
  //push one new value to x/y arrays, delete first value
  //method one: Random
  //x.push(x[x.length-1] + random(-SPEED,SPEED));
  //y.push(y[y.length-1] + random(-SPEED,SPEED));

//method two: mouse cursor
x.push(mouseX + random(-3, 3));
y.push(mouseY + random(-3, 3));
  //remove first element from x/y arrays
  x.shift();
  y.shift();

}

