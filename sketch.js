let ground;
let box;
let bird;
let world, engine;

let birdImage;
let boxImage;
let backgroundImage;

function preload() {
  backgroundImage = loadImage('assets/bg.jpg');
  birdImage = loadImage('assets/bird.png');
  boxImage = loadImage('assets/boxy.png');
}

function setup() {
  createCanvas(600, 400);
  engine = Matter.Engine.create();
  world = engine.world;
  ground = new Ground(width/2, height-20, width, 20);
  box = new Box (450, 300, 50, 75);
  bird = new Bird(50, 300, 25);
}

function draw() {
  background(0);
  Matter.Engine.update(engine);
  ground.show();
  box.show();
  bird.show();
}
