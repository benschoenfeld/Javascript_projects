function preload() {
    backImage = loadImage("assets/background.png");
    backImageReport = loadImage("assets/backgroundReport.png");
    barrelImage = loadImage("assets/barrel.png");
    baseImage = loadImage("assets/base.png");
    cannonballImage = loadImage("assets/cannonball.png");
    targetImage = loadImage("assets/target.png");
  
    for (let i = 1; i <= 6; i++) {
      explosionImages[i-1] = loadImage("assets/ex" + i + ".png");
    }
  
    for (let i = 0; i < 21; i++) {
      shotsRemainingImages[i] = loadImage("assets/shots" + i + ".png");
    }
  
    for (let i = 0; i < 21; i++) {
      targetsHitImages[i] = loadImage("assets/target" + i + ".png");
    }
  }