class Particle {

    constructor(x, y) {
        this.pos = createVector(x, y);
        this.vel = createVector(random(-0.5, 0.5), random(-1, -3 )); // upwards
        //this.grav = createVector(0 , 0.15);
        this.lifetime = int(random(30, 50));
      }
    
    
      display() {
        noStroke();
        fill(150 , int(random(70, 150)));
        rectMode(CENTER);
        ellipse(this.pos.x, this.pos.y, 15, 15);
        this.lifetime--;
      }
    
      move() {
        this.pos.add(this.vel);
        //this.vel.add(this.grav);  //applies gravity to our current vel.
      }
}
