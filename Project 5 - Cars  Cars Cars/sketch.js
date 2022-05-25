// Cars Cars Cars
// Ben Schoenfeld
// May 18th, 2022
//

let lane = 2;
let myCar;
const CARS_CREATE = 20;
let carsCollection = [];


function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let i = 0; i < CARS_CREATE; i++) {
    lane = int(random(0, 2));
    if (lane === 0) {
      carsCollection.push(new Cars(windowWidth, random(0, windowHeight / 2), lane))
    }
    else {
      carsCollection.push(new Cars(0, random(500, 1000), lane));
    }
  }
  myCar = new Cars(width/3, height/3, 1);

}

function draw() {
  background(255);
  drawRoad();
  myCar.action();
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
    this.dir = int(random(2))
    this.type = int(random(2));
    this.c = color(random(255), random(255), random(255));

    if (this.dir === 0) {
      this.speed = 10;
      this.y = random(500,1000);
    } else {
      this.speed = -10;
      this.y = random(0, height/2);
    }





  }

  




  move() {
    this.x += this.speed;
    if (this.x <= 0 && this.dir === 1) {
      this.x += width;
    } else if (this.x >= width && this.dir === 0) {
      this.x -= width;
    }
  }

  speedUp() {
    this.speed += 2;
    this.speed = constrain(this.speed, 1, 15);
  }

  speedDown() {
    this.speed -= 2;
    this.speed = constrain(this.speed, 0, 15);
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

    // if (random(100) <= 1) {
    //   this.speedUp();
    // }
    // if (random(100) <= 1) {
    //   this.speedDown
    // }

    this.move();
    this.display();
    //this.changeColor();
    

    
  }
}

