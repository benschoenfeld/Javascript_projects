// Farm Game Demo
// Ben S
// June 1, 2022
//
// A second look at working with 2D data structures/
// creating a tile-based gameboard and block pusher mechanics

// Global Variables
const COLUMNS = 5;
const ROWS = 5;
const TILE_SIZE = 100;
let playerX = 3;  // setup player's initial location
let playerY = 3;


let level = [
[0, 0, 1, 0, 0],
[0, 1, 0, 1, 0],
[0, 0, 1, 0, 0],
[0, 0, 0, 2, 0],
[0, 0, 0, 0, 0] ];

let tiles = [];  //0 → blank
                 //1 → chicken
                 //2 → cow

function preload() {
  for(let i = 0; i < 3; i++) {
    tiles.push(loadImage("assets/"+i+".png"));
  }
}


function setup() {
  createCanvas(COLUMNS * TILE_SIZE, ROWS * TILE_SIZE);
  level[playerY][playerX] = 2;
}

function draw() {
  renderBoard();
}

function renderBoard() {
  //interpret data in our 2D array, and place images accordingly
  for (let y = 0; y<ROWS; y++) {
    for (let x = 0; x<COLUMNS; x++) {
      //(0, 0)  (0,1)  [0][2]  
      let imageIndex = level[y][x];
      image(tiles[imageIndex], x*TILE_SIZE, y*TILE_SIZE);
    }
  }
}

//Functions related to movement:

function swap(x1, y1, x2, y2) {
  //simple manipulation of the gameboard; switch 2 adjacent items
  let temp = level[y1][x1];
  level [y1][x1] = level[y2][x2];
  level[y2][x2] = temp;
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
   swap(playerX, playerY, playerX, playerY - 1);
   playerY--;
  }

  if (keyCode === DOWN_ARROW) {
    swap(playerX, playerY, playerX, playerY +1);
    playerY++;
  }

  if (keyCode === LEFT_ARROW) {
    swap(playerX, playerY, playerX -1, playerY);
    playerX--;
  }

  if (keyCode === RIGHT_ARROW) {
    swap(playerX, playerY, playerX +1, playerY);
    playerX++;
  }
}