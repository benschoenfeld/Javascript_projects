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
const NUM_COLS = 5;
let rectWidth, rectHeight, row, col;


function setup() {
  rectWidth = 50;
  rectHeight = 50;
  createCanvas(rectWidth * NUM_COLS, rectHeight * NUM_ROWS);
}

function draw() {
  row = getCurrentY();
  col = getCurrentX();
  background(220);
  renderGrid();

  // print(getCurrentX() + "\t" + getCurrentY());
}

function mousePressed() {
  //when the mouse is clicked, flip the value lined up w mouse pos
  // also flip 4 compass neightbours

  //mousePosition
  flip(col, row);

  //flip the neighbours
  if(col < NUM_COLS - 1) flip(col + 1, row); //flip RIGHT neighbour
  if(col > 0) flip(col - 1, row); //flip LEFT neighbour
  if(row > 0) flip(col, row -1); //flip TOP neighbour
  if(row < NUM_ROWS - 1) flip(col, row + 1); //flip BOTTOM neighbour
}



function flip(col, row) {
  //at given x,y flip the value in our 2D array;
  //0 → 255     255 → 0
  if(grid[row][col] === 0)  grid[row][col] = 255;
  else grid[row][col] = 0;

}
function getCurrentX() {
  
  //determine which column mouse is currently in
  return int(mouseX/rectWidth);
}


function getCurrentY() {
  //determine which row mouse is currently in
  return int(mouseY/rectHeight);
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
