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
  [0, 1, 0, 1, 0],
  [0, 0, 0, 0, 0]];

let tiles = [];  //0 → blank
//1 → chicken
//2 → cow

function preload() {
  for (let i = 0; i < 3; i++) {
    tiles.push(loadImage("assets/" + i + ".png"));
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
  for (let y = 0; y < ROWS; y++) {
    for (let x = 0; x < COLUMNS; x++) {
      //(0, 0)  (0,1)  [0][2]  
      let imageIndex = level[y][x];
      image(tiles[imageIndex], x * TILE_SIZE, y * TILE_SIZE);
    }
  }
}

//Functions related to movement:

function swap(x1, y1, x2, y2) {
  //simple manipulation of the gameboard; switch 2 adjacent items
  let temp = level[y1][x1];
  level[y1][x1] = level[y2][x2];
  level[y2][x2] = temp;
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    if (playerY > 0) {  //verify there is atleast one tile above the player
      //if there is something there, let's check what it is:
      if (level[playerY - 1][playerX] === 0) { // grass tile above
        swap(playerX, playerY, playerX, playerY - 1);
        playerY--;
      } else if (level[playerY-1][playerX]===1) { //chicken tile above
        if(playerY > 1 && level[playerY-2][playerX]===0) {
          // indicates enough room to not go off the array
          // and also that beyond the pushable object there is grass tile
          swap(playerX, playerY-1, playerX, playerY-2);
          swap(playerX, playerY, playerX, playerY-1);
          playerY--;
        }
      }



    }
  }

  if (keyCode === DOWN_ARROW) {
    if (playerY < 4) {
      swap(playerX, playerY, playerX, playerY + 1);
      playerY++;
    }
  }

  if (keyCode === LEFT_ARROW) {
    if (playerX > 0) {
      swap(playerX, playerY, playerX - 1, playerY);
      playerX--;
    }
  }

  if (keyCode === RIGHT_ARROW) {
    if (playerX < 4) {
      swap(playerX, playerY, playerX + 1, playerY);
      playerX++;
    }
  }
}