class Star extends MovableMarker {
    constructor(x, y) {
        super(x, y);
       
    }

 display() {
     fill(0, 0, 255);
    star(0, 0, 30, 70, 5)
 }




}

function star(x, y, radius1, radius2, npoints) {
    let angle = TWO_PI / npoints;
    let halfAngle = angle / 2.0;
    beginShape();
    for (let a = 0; a < TWO_PI; a += angle) {
      let sx = x + cos(a) * radius2;
      let sy = y + sin(a) * radius2;
      vertex(sx, sy);
      sx = x + cos(a + halfAngle) * radius1;
      sy = y + sin(a + halfAngle) * radius1;
      vertex(sx, sy);
    }
    endShape(CLOSE);
  }

  function keyPressed() {
    if (key === "q") {
      markers.push(new Star(mouseX, mouseY));
      print("hello");
    }
}  