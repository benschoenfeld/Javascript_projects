
class Ball {

    constructor(v_) {
        this.pos = createVector(73, 525);
        this.velocity = v_;
        this.gravity = createVector(0, 0.2);
        this.alive = true;
        this.collisionType = 0;  //1 - Ground   2 - Target
                                 //0 - No collision
        this.diameter = 40;
        this.radius = this.diameter /2; 
    }

    move() {
        this.pos.add(this.velocity);
        this.velocity.add(this.gravity);
        
    }

    display() {
        push();
        translate(this.pos.x, this.pos.y);
        image(cannonballImage, 0, 0);
        pop();
        //print(this.pos.x, this.pos.y);
    }

    getAlive() {
        return this.alive;
    }

    gotCollisionType() {
        return this.collisionType;
    }

    checkGroundCollision() {
        //546
        if (this.pos.y > 546) {
            this.alive = false;
            this.collisionType = 1;
            
            //smoke when ground hit
            for(let i = 0; i < 50; i++) {
                particles.push(new Particle(this.pos.x, this.pos.y));
            }
        }
    }

    ballTargetCollision() {
        if (dist(this.pos.x, this.pos.y, currentGame.target.x, currentGame.target.y) < this.radius + currentGame.target.radius) {
            this.collisionType = 2;
            currentGame.target = new Target();
            currentGame.targetsLeft--;
            explosions.push( new Explosion(this.pos.x, this.pos.y));
            this.alive = false;
            currentGame.targetTracker++;
        }
    }
}