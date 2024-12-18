// Working with Images Demo
//Mr. Scott
//May 11, 2022
//Loading and Using 

let lionL, lionR;
let facingLeft = true;

let pinImages = [];
let currentFrame = 0;


function preload(){
  //use to assure all our assets are loaded before carrying on
  lionL = loadImage("assets/lion-left.png");
  lionR = loadImage("assets/lion-right.png");

  for (let i = 0; i < 9 ; i++){
    pinImages[i] = loadImage("assets/pin-0" + i + ".png");
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  //frameRate(15);
}

function draw() {  //one time through draw = one screen refresh
  background(255);
  drawLion();
  drawPin();
  
}

function drawPin(){
  //animate by cycling through our 9 pin images
  image(pinImages[currentFrame], width /2, height /1.5);

  if(frameCount % 14 === 0) {
  
    currentFrame++; //advance to next image
    if(currentFrame > pinImages.length - 1) currentFrame = 0;
  }
}


function drawLion(){
  //draw a lion facing the last directoin of the mouse cursor.
  if (movedX < 0) { facingLeft = true;}
    else if (movedX > 0){ facingLeft = false;} 



  if (facingLeft){
    image(lionL, mouseX, mouseY, lionL.width /2, lionL.height /2);
  }
    else{
      image(lionR, mouseX, mouseY, lionR.width /2, lionR.height /2);
    }
  print(movedX);

}
