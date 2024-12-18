class Game {

    constructor() {
        this.cannonAngle = 60;
        this.cannonPower = 10;
        this.shots = [];
        this.shotsLeft = 20;
        this.targetsLeft = 20;
        this.target = new Target();
        this.targetTracker = 0;

    }

    play() {

        //called once per frame (acts like draw)
        imageMode(CORNER);
        image(backImage, 0, 0);
        imageMode(CENTER);

        //process and draw every cannonball
        for (let i = 0; i < this.shots.length; i++) {
            let b = this.shots[i];
            b.move();
            b.display();
            b.checkGroundCollision();
            b.ballTargetCollision();


            // check the target collision
            if (b.getAlive() === false) {
                //ground collision case
                // create/spawn a bunch of smoke particles
                this.shots.splice(i, 1);
                i--;
            }
        }

        //process and draw every smoke particle
        for (let i = 0; i < particles.length; i++) {
            let p = particles[i];
            p.display();
            p.move();
            if (p.lifetime < 0) {
                particles.splice(i, 1);
            }
        }
        //process and draw every explosion that is active
        for (let i = 0; i < explosions.length; i++) {
            let e = explosions[i];
            e.display();
        }

        //draw the cannon
        this.displayCannon();
        this.displayPower();

        // draw other components 
        this.displayCannonCount();
        this.displayTargetsHit();
        this.target.display();
        this.displayScore();


    }

    //add ball to ball array (until 0)
    createShot() {
        if (this.shotsLeft > 0) {
            let v = createVector(this.cannonPower * cos(radians(this.cannonAngle)),
                this.cannonPower * sin(radians(this.cannonAngle) * -1));
            this.shots.push(new Ball(v));
            this.shotsLeft--;
        }
    }

    displayCannon() {
        imageMode(CENTER);
        push();
        translate(73, 525);
        push();
        rotate(radians(360 - this.cannonAngle));
        image(barrelImage, 0, 0);
        pop();
        image(baseImage, 0, 0);
        pop();
    }

    displayPower() {
        rectMode(CORNER);
        fill(0);
        rect(0, 50, this.cannonPower * 15 - 50, 45);
    }

    //change the power of the cannon (velocity of ball);
    changePower(increase) {
        if (increase) {
            if (this.cannonPower < 20) this.cannonPower += 0.15;
        }
        else {
            if (this.cannonPower > 5) this.cannonPower -= 0.15;
        }
    }

    changeAngle(increase) {
        //if increase is true - getting larger angle
        if (increase) {
            if (this.cannonAngle < 90) this.cannonAngle += 2;
        }
        else {
            if (this.cannonAngle > 0) this.cannonAngle -= 2;
        }
    }

    //display shots left
    displayCannonCount() {
        image(shotsRemainingImages[this.shotsLeft], 500, 50);
    }

    //display target amount
    displayTargetsHit() {

        image(targetsHitImages[this.targetsLeft], width - 80, 50)
    }

    displayScore() {
        if (this.shotsLeft === 0 && this.shots.length === 0) {

            imageMode(CORNER);
            image(backImageReport, 0, 0);
            textAlign(CENTER);
            textSize(50);
            fill(255);


            //a
            if (this.targetTracker <= 20 && this.targetTracker >= 16) {
                text("A", width / 2, height / 2 - 50);
                text("Your Score Was " + this.targetTracker + "/20", width / 2, height / 3);
            }

            //b
            if (this.targetTracker < 15 && this.targetTracker >= 13) {
                text("B", width / 2, height / 2 - 50);
                text("Your Score Was " + this.targetTracker + "/20", width / 2, height / 3)

            }

            //c
            if (this.targetTracker <= 12 && this.targetTracker >= 10) {
                text("C", width / 2, height / 2 - 50);
                text("Your Score Was " + this.targetTracker + "/20", width / 2, height / 3);
            }

            //lose
            if (this.targetTracker < 9) {
                text("You Lost", width / 2, height / 2 - 50);
                text("Your Score Was " + this.targetTracker + "/20", width / 2, height / 3);
            }

        }
    }

    displayTargetCount() {
        image(targetsHitImages[this.targetsLeft])
    }
}