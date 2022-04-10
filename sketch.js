const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
  createCanvas(400, 400);

  engine = Engine.create();
  world = engine.world;
  rectMode(CENTER);
  ellipseMode(RADIUS);

  var ballOptions = {
    restitution: 1,
    frictionAir: 0.005,
    bounciness: 0.00005,
  };

  ball = Bodies.circle(200, 200, 10, ballOptions);
  World.add(world, ball);

  button = createImg("shootButton.png");
  button.position(200, 30);
  button.size(50, 50);
  button.mouseClicked(pushBall);

  cannon = createImg("cannon.png");
  cannon.position(20, 340);
  cannon.size(60, 50);

  ground = new Wall(200, 395, 400, 10);
  rightWall = new Wall(395, 200, 10, 400);

  var ballOptions = {
    restitution: 1,
    frictionAir: 0.005,
    bounciness: 0.00005,
  };

  var boxOptions = {
    restitution: 1,
    frictionAir: 0.005,
    bounciness: 0.00003,
  };

  box = Bodies.rectangle(348.7, 340, 50, 50, boxOptions);
  World.add(world, box);
  box1 = Bodies.rectangle(350, 290, 50, 50, boxOptions);
  World.add(world, box1);
  box2 = Bodies.rectangle(350, 240, 50, 50, boxOptions);
  World.add(world, box2);
  box3 = Bodies.rectangle(350, 190, 50, 50, boxOptions);
  World.add(world, box3);
  box4 = Bodies.rectangle(350, 140, 50, 50, boxOptions);
  World.add(world, box4);
  box5 = Bodies.rectangle(350, 90, 50, 50, boxOptions);
  World.add(world, box5);
  box6 = Bodies.rectangle(350, 40, 50, 50, boxOptions);
  World.add(world, box6);
}

function draw() {
  background(51);
  Engine.update(engine);

  ground.show();
  rightWall.show();
  rect(box.position.x, box.position.y, 50, 50);
  rect(box1.position.x, box1.position.y, 50, 50);
  rect(box2.position.x, box2.position.y, 50, 50);
  rect(box3.position.x, box3.position.y, 50, 50);
  rect(box4.position.x, box4.position.y, 50, 50);
  rect(box5.position.x, box5.position.y, 50, 50);
  rect(box6.position.x, box6.position.y, 50, 50);

  var ballOptions = {
    restitution: 1,
    frictionAir: 0.005,
    bounciness: 0.00005,
  };

  if (ball.position.x > 500 || ball.position.x < 0) {
    ball = Bodies.circle(200, 200, 10, ballOptions);
    World.add(world, ball);
  }

  ellipse(ball.position.x, ball.position.y, 10);
  console.log(ball.position.x);
}

function pushBall() {
  if (ball.position.x < 60) {
    Matter.Body.applyForce(ball, { x: 0, y: 0 }, { x: 0.02, y: -0.02 });
  }
}
