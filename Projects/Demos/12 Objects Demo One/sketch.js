// Objects Demo One
// Ben Schoenfeld
// May 17th, 2022
//A first look at Object-Oriented Programming (OOP)

//let myWalker;
const NUM_WALKERS = 110;
let walkers = [];



function setup() {
  createCanvas(windowWidth, windowHeight);
  let col = color(random(255), random(255), random(255));
  //myWalker = new Walker(random(width), random(height), col);
  background(0);

  for(let i = 0; i < NUM_WALKERS ; i++){
    let col = color(random(255), random(255), random(255));
    walkers.push(new Walker(random(width), random(height), col));
  }


}

function draw() {
  
  //myWalker.move();
  //myWalker.display();

  //process (move/display all walkers)
  for(let i = 0; i < walkers.length; i++){
    walkers[i].move();
    walkers[i].display();
  }
}


class Walker{

  //class constructor and properties
  constructor(x, y, c){
    this.x = x;
    this.y = y;
    this.c = c;
    this.speed = 10;
    this.size = 5;
    this.type = Math.floor(random(2)); //0 or 1
    //0 use random walk movement       1 use perlin movement
    this.timeX = random(999);
    this.timeY = random(999);
    this.inc = 0.1;  //how related are subsequent noise() random values
  }

  //class methods/functions
  display(){   //display walker at its current location
    rectMode(CENTER);
    fill(this.c);
    rect(this.x, this.y, this.size, this.size);


  }

  move(){
    //option One - regular random walk
    if(this.type === 0) {this.moveRandom();}
    else {this.movePerlin()};

  }

  movePerlin(){
    //move using noice()
    this.x += map(noise(this.timeX),0,1,-this.speed, this.speed);
    this.y += map(noise(this,timeY),0,1,-this.speed, this.speed);

    this.timeX += this.inc;
    this.timeY += this.inc;

  }

  moveRandom(){
    //equally likely chance to move left,
    let choice = Math.floor(random(4));

    if (choice === 0) { this.x += this.speed; } //LEFT
    else if (choice === 1) { this.x += this.speed; } //RIGHT
    else if (choice === 2) { this.y -= this.speed; } //UP
    else { this.y += this.speed; } //DOWN
  }





}
