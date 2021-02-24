const { Engine, World, Bodies, Mouse, MouseConstraint, Constraint } = Matter;
const boxy = [];

let ground;
let bird;
let world, engine;
let mouseRestriction;

let birdImage;
let boxImage;
let backgroundImage;

function preload() {
  backgroundImage = loadImage('assets/bg.jpg');
  birdImage = loadImage('assets/bird.png');
  boxImage = loadImage('assets/boxy.png');
}

function setup() {
  const myCanvas = createCanvas(711, 400);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width / 2, height - 40, width, 20);
  for (let i = 0; i < 5; i++) {
    boxy[i] = new Box(500, 100 - i * 50, 50, 50);
  }
  bird = new Bird(150, 300, 25);


  const mouse = Mouse.create(myCanvas.elt);
  const options = {
    mouse: mouse
  };

//  pixel density hd fix ugh...
  mouse.pixelRatio = pixelDensity();
  mouseRestriction = MouseConstraint.create(engine, options);
  World.add(world, mouseRestriction);
}

function keyPressed() {
  if (key === 'r') {
    World.remove(world, bird.body);
    bird = new Bird(150, 300, 25);
  }
}

function draw() {
  background(backgroundImage);
  Matter.Engine.update(engine);
  ground.show();
  for (let box of boxy) {
    box.show();
  }
  bird.show();
}
