// Polymorphism and Inheritance
// Ben Schoenfeld
// May 26th, 2022

let p1, p2;


function setup() {
  createCanvas(600, 600);
  p1 = new Particle(300, 300);
  p2 = new Confetti(300, 300);
}

function draw() {
  background(0);
  p1.update();
  p1.show();
  p2.update();
  p2.show();
}



class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  update() {
    this.x += random(-5, 5);
    this.y += random(-5, 5);
  }

  show() {
    stroke(255);
    strokeWeight(24);
    point(this.x, this.y);
  }
}