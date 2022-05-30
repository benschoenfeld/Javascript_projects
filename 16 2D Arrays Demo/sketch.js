// 2D Arrays Demo
// Ben S
// May 30, 2022
// Starter Demo for our 2D array assignment puzzle game

let grid = 
[[0,   255,   0,  0,   255],
 [0 ,  255,   0,  0,   255],
 [255,  0,   255, 0,   255],
 [255,  0,    0,  0,     0]];


const NUM_ROWS = 4;
const NUM_COLS =5;
let rectWidth, rectHeight;


function setup() {
  rectWidth = 50;
  rectHeight = 50;
  createCanvas(rectWidth * NUM_COLS, rectHeight * NUM_ROWS);
}

function draw() {
  background(220);
  renderGrid();
}


function renderGrid() {
  //create a 2D grid of sqaures using information form our
  // 2D Array for the corresponding fill values

  for (let x = 0 ; x < NUM_COLS ; x++) {
    for (let y = 0 ; y < NUM_ROWS ; y++) {
      let fillValue = grid[y][x];
      fill(fillValue);
      rect(x*rectWidth, y*rectHeight, rectWidth, rectHeight );
    }
  }

}
