class Ball {

    constructor(v_) {
        this.pos = createVector(73, 525);
        this.velocity = v_;
        this.gravity = createVector(0, 0.2);
        this.alive = true;
        this.collisionType = 0;  //1 - Ground   2 - Target
                                 //0 - No collision
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

    
}