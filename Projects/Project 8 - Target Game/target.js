

class Target {
    constructor(x,y) {
        this.x = int(random(100, width));
        this.y = int(random(120, 546));
        this.diameter = 40;
        this.radius = this.diameter / 2;

    }
        

    display() {
        image(targetImage, this.x, this.y);
        ///print(this.x, this.y);
    }
    
  








}