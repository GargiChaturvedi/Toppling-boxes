const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var groundOption, ballOption;

var engine, world, ground, box1, box2;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  box1 = new Box(200, 300, 50, 50);
  box2 = new Box(240, 100, 50, 100);
  //ballOption = {
    //isStatic: false,
    //restitution: 1.0
  //}
  //ground = Bodies.rectangle(200, 380, 400, 20, groundOption);
  //ball = Bodies.circle(200, 100, 30, ballOption);
  ground = new Ground(200, 380, 400, 20);
  //World.add(world, ball);
}

function draw() {
  background(0);
  Engine.update(engine);
  //fill("blue");
  //rectMode(CENTER);
  //rect(ground.position.x, ground.position.y, 400, 20);
  box1.display();
  box2.display();
  ground.display();
  //fill("deeppink");
  //ellipseMode(RADIUS);
  //ellipse(ball.position.x, ball.position.y, 30, 30);
}