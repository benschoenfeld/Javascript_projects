class Game {
    
    constructor() {
        this.cannonAngle = 45;
        this.connonPower = 10;
        this.shot = [];
    }

    play() {
        //called once per frame (acts like draw)
        imageMode(CORNER);
        image(backImage,0,0);

        //process and draw every cannonball


        //process and draw every smoke particle


        //draw the cannon
        this.displayCannon();
    }


    displayCannon() {
        imageMode(CENTER);
        push();
        translate(73, 525);
        push();
        rotate(radians(360 - this.cannonAngle));
        image(barrelImage,0,0);
        pop();
        image(baseImage, 0, 0);
        pop();
    }










}