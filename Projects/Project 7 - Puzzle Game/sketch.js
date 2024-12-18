// Puzzle Game
// Ben Schoenfeld
// June 1, 2022

// Create a puzzle game where a random checkered-style grid is generated
// and must be changed to either all white or all black with a secret cheat


let NUM_ROWS = 4;
let NUM_COLS = 5;
let rectWidth, rectHeight;
let currentRow, currentCol;
let gridData = [[0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 255, 0, 0, 0],
                [255, 255, 255, 0, 0]];
let randomCol = [0, 255];


function setup() {
  // Determine the size of each square. Could use windowHeight,windowHeight  
  // for Canvas to keep a square aspect ratio
  createCanvas(windowWidth, windowHeight);
  rectWidth = width / NUM_COLS;
  rectHeight = height / NUM_ROWS;
  randomizer();

  
}
  function draw() {
    background(220);
    determineActiveSquare();   //figure out which tile the mouse cursor is over
    drawGrid();                //render the current game board to the screen (and the overlay)
    win();               
  }



  function mousePressed() {
    // cross-shaped pattern flips on a mouseclick. Boundary conditions are checked 
    // within the flip function to ensure in-bounds access for array
    // CHEAT: use shift-left click to flip a single square

    if (mouseButton === LEFT && keyIsDown(16) && keyIsPressed) {
      flip(currentCol, currentRow);
    } else {
      flip(currentCol, currentRow);
      flip(currentCol - 1, currentRow);
      flip(currentCol + 1, currentRow);
      flip(currentCol, currentRow - 1);
      flip(currentCol, currentRow + 1);

    }
  }
  function flip(col, row) {
    // given a column and row for the 2D array, flip its value from 0 to 255 or 255 to 0
    // conditions ensure that the col and row given are valid and exist for the array. If not, no operations take place.
    if (col >= 0 && col < NUM_COLS) {
      if (row >= 0 && row < NUM_ROWS) {
        if (gridData[row][col] === 0) gridData[row][col] = 255;
        else gridData[row][col] = 0;
      }
    }
  }

  function determineActiveSquare() {
    // An expression to run each frame to determine where the mouse currently is.
    currentRow = int(mouseY / rectHeight);
    currentCol = int(mouseX / rectWidth);
  }

  function drawGrid() {
    // Render a grid of squares - fill color set according to data stored in the 2D array
    for (let x = 0; x < NUM_COLS; x++) {
      for (let y = 0; y < NUM_ROWS; y++) {
        fill(gridData[y][x]);
        rect(x * rectWidth, y * rectHeight, rectWidth, rectHeight);
      }
    }
  }


function win() { //display text "you win" to represent completion
    for (let x = 0; x < NUM_COLS; x++) {
      for (let y = 0; y < NUM_ROWS; y++) {
        if (gridData[0][0] !== gridData[y][x]) {
          return;
      }
    }
  }
    textAlign(CENTER,CENTER);
    fill(random(255), random(255), random(255));
    textSize(32);
    text('YOU WIN', width / 2, height / 2);

}
//randomizes the tiles in setup of canvas
function randomizer() {
 for (let x = 0; x < NUM_COLS; x++) {
      for (let y = 0; y < NUM_ROWS; y++) {
        gridData[y][x] = (int(random(0,2))*255);
        
      }
    }
}