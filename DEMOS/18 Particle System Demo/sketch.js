// Particle System Demo
// Ben Schoenfeld
// June 7, 2022
// A system of behavior for many objects

//global variabels
let spiralImages = [];
let spirals = [];
let particles = [];

function preload() {
  for (let i = 0; i < 16; i++) {
    if (i < 10) {
      spiralImages.push(loadImage("assets/Circle Animation0" + i + ".png"));
    }
    else {
      spiralImages.push(loadImage("assets/Circle Animation" + i + ".png"));
    }

  }
}


function mousePressed() {
  //to simulate a target being hit:
  spirals.push(new Spiral(mouseX, mouseY));

  //to simulate a plume of smoke 
  // need to create all particles at one specific moment
  for (let i = 0; i < 100; i++) {
    particles.push(new Particle());
  }
}


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);

  //SPIRALS SECTION
  for (let i = 0; i < spirals.length; i++) {
    let s = spirals[i];
    s.display();
    //check if it's time to remove
    if (s.active === false) {
      spirals.splice(i, 1);
      i--; //since we removed an item, back up i as well.
    }
  }




  //PARTICLES SECTION
  particles.push(new Particle());


  for (let p of particles) {
    p.move();
    p.display();
  }
}


class Particle {
  constructor() {
    this.pos = createVector(width / 2, height);
    this.vel = createVector(random(-3, 3), random(-10, -6)); // upwards
    this.grav = createVector(0 , 0.15);
  }


  display() {
    fill(255);
    rectMode(CENTER);
    rect(this.pos.x, this.pos.y, 10, 10);
  }

  move() {
    this.pos.add(this.vel);
    this.vel.add(this.grav);  //applies gravity to our current vel.
  }

}






class Spiral {
  //constructor
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.currentFrame = 0;   //0 - 15
    this.active = true;
  }

  //class methods
  display() {
    if (this.currentFrame > 15) {  //indicates animation is over
      this.active = false;  //time to remove the object
    }
    else {  //implies we havent reached the end of the animation
      image(spiralImages[this.currentFrame], this.pos.x, this.pos.y);
      if (frameCount % 4 === 0) {
        this.currentFrame++;
      }
    }
  }

}