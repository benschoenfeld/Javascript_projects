// Cars Cars Cars
// Ben Schoenfeld
// May 18th, 2022
//


let myCar;
const CARS_CREATE1 = 20;
const CARS_CREATE2 = 20;
let driveEast = [];
let driveWest = [];
let bottomHalf;
let topHalf;

function setup() {
  createCanvas(windowWidth, windowHeight);

  //draw cars travelling east
  for (let i = 0; i < CARS_CREATE1; i++) {
    bottomHalf = random(670);
    bottomHalf = constrain(bottomHalf, 520, 670);
    driveEast.push(new Cars(0, bottomHalf, 0));
  }

  //draw cars travelling west
  for (let i = 0; i < CARS_CREATE2; i++) {
    topHalf = random(435);
    topHalf = constrain(topHalf, 300, 435);
    driveWest.push(new Cars(500, topHalf, 1));
  }


}

function draw() {
  background(255);
  drawRoad();

  for (let i = 0; i < driveEast.length; i++) {
    driveEast[i].action();
  }
  for (let i = 0; i < driveWest.length; i++) {
    driveWest[i].action();
  }
}

function drawRoad() {
  rectMode(CORNER);
  noStroke();
  fill(0);
  rect(0, height / 4, width, height / 2);

  for (let x = 0; x < width; x += 50) {
    stroke(255);
    strokeWeight(5);
    line(x, windowHeight / 2, x + 30, windowHeight / 2);
  }
}


class Cars {
  constructor(x, y, dir) {
    this.x = x;
    this.y = y;
    this.dir = dir;
    this.type = int(random(2));
    this.c = color(random(255), random(255), random(255));

    if (this.dir === 0) {
      this.speed = 10;
    } else {
      this.speed = -10;
    }
  }

  




  move() {
    //wraparound
    this.x += this.speed;
    if (this.x <= 0 && this.dir === 1) {
      this.x += width;
    } else if (this.x >= width && this.dir === 0) {
      this.x -= width;
    }
  }

  speedUp() {
    this.speed += 2;
    if(this.dir === 0) {
    this.speed = constrain(this.speed, 1, 10);
    } else {
      this.speed = constrain(this.speed, -10, -1);
    }
  }

  speedDown() {
    this.speed -= 2;
    if (this.dir === 0) {
    this.speed = constrain(this.speed, 1, 10);
    } else {
      this.speed = constrain(this.speed, -10, -1);
    }
  }

  changeColor() {
    this.c = color(random(255), random(255), random(255));
  }




  display() {
    rectMode(CENTER);
    noStroke();





    // Car === 0  Truck === 1 
    if (this.type === 0) {
      fill(200)
      rect(this.x + 15, this.y, 10, 35);
      rect(this.x - 15, this.y, 10, 35);

      fill(this.c)
      rect(this.x, this.y, 50, 30);




    } else {
      fill(200);
      rect(this.x + 40, this.y, 15, 65)
      rect(this.x - 15, this.y, 20, 60)

      fill(this.c);
      rect(this.x, this.y, 60, 50);
      rect(this.x + 30, this.y, 40, 40)
    }
  }



  action() {

    if (random(100) <= 1) {
      this.speedUp();
    }
    if (random(100) <= 1) {
      this.speedDown();
    }

    if (random(100) <= 1) {
      this.changeColor();
    }

    this.move();
    this.display();
  }
}

