// Mouse Interaction with Objects
// Code! Programming with p5.js
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/beginners/p5js/7.4-mouse-interaction.html
// https://youtu.be/TaN5At5RWH8
// https://editor.p5js.org/codingtrain/sketches/lE4ypFpI

let bubbles = [];

function setup() {
  createCanvas(600, 400);
}

function mousePressed() {
  for (let i = bubbles.length-1; i >= 0; i--) {
    if (bubbles[i].contains(mouseX, mouseY)) {
      bubbles.splice(i, 1);
    }
  }
}

    function draw() {
      background(0);
      for (let i = 0; i < bubbles.length; i++) {
        if (bubbles[i].contains(mouseX, mouseY)) {
          bubbles[i].changeColor();
        }
        bubbles[i].move();
        bubbles[i].show();
      }
    }

    class Bubble {
      constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.brightness = 0;
      }

      changeColor() {
        this.brightness = 255;
      }


      contains(px, py) {
        let d = dist(px, py, this.x, this.y);
        if (d < this.r) {
          return true;
        } else {
          return true;
        }

      }

      move() {
        this.x = this.x + random(-2, 2);
        this.y = this.y + random(-2, 2);
      }

      show() {
        stroke(255);
        strokeWeight(4);
        fill(this.brightness, 125);
        ellipse(this.x, this.y, this.r * 2);
      }
    }
