// Creates class for the bird object
class Bird {
  constructor(x, y, r) {

    // Sets restitution(bounciness) of body
    const options = {
      restitution: 0.5
    };

    // Creates data set for the object including mass, and adds it to world
    this.body = Matter.Bodies.circle(x, y, r, options);
    Matter.Body.setMass(this.body, this.body.mass * 2.5);
    Matter.World.add(world, this.body);
    this.r = r;
  }

  // displays bird and image can rotate based on the body position
  show() {

    // Only displays when the pig object is alive
    if (pigAlive) {
      const pos = this.body.position;
      const angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(whichBird, 0, 0, this.r * 2, this.r * 2);
      pop();
    }
  }
}