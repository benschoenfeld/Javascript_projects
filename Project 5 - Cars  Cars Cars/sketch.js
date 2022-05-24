// Cars Cars Cars
// Ben Schoenfeld
// May 18th, 2022
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let myCar;


function setup() {
  createCanvas(windowWidth, windowHeight);
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
    this.dir = dir;
    this.type = int(random(2));
    this.c = color(random(255), random(255), random(255));
   
    if (this.dir === 0){
      this.speed = 10;
    } else {
      this.speed = -10;
    }



    

  }

  action() {
    this.move();
    this.display();

  }




  move() {
    this.x += this.speed;
    if (this.x <= 0 && this.dir === 1) {
      this.x += width;
    } else if (this.x >= width && this.dir === 0){
      this.x -= width;
    }
  }

  display() {
    rectMode(CENTER);
    noStroke();
    
    if (this.type === 0) {
    fill(200)
    rect(this.x+15, this.y, 10, 35);
    rect(this.x-15, this.y, 10, 35);
    
    fill(this.c)
    rect(this.x, this.y, 50, 30);

    


    } else {
      fill(this.c);
      rect(this.x, this.y, 60, 50);
    }
  }

}

