class Target {
    constructor(x,y) {
        this.x = int(random(100, width));
        this.y = int(random(120, 546));
        this.diameter = 40;
        this.radius = this.diameter / 2;


    }
        
    display() {
        image(targetImage, this.x, this.y);
    }
}



class Explosion {
    constructor(x, y) {
      this.pos = createVector(x, y);
      this.currentFrame = 0;   //0 -> 15
      this.active = true;
    }
  
    display() {
      if (this.currentFrame > 5) {
        this.active = false;
      } else {
        image(explosionImages[this.currentFrame], this.pos.x, this.pos.y);
        if (frameCount % 4 === 0) {
          this.currentFrame++;
        }
      }
    }
  
}