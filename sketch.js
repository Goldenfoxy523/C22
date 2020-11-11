
//namespacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var rect1, ground;

var ball

var myEngine, myWorld;

function setup() {
  createCanvas(600,600);

  myEngine = Engine.create();
  myWorld = myEngine.world;

  var options = {
    isStatic:true
  }


  var ballOptions = {

    restitution: 1.5

  }

  ground = Bodies.rectangle(300,580,600,50, options);
  World.add(myWorld,ground);

  ball = Bodies.circle(200,200,20, ballOptions);

  World.add(myWorld,ball);

  console.log(ground);

  console.log(ball);

  
}

function draw() {
  background(0);  
  Engine.update(myEngine);
  rectMode(CENTER)
  rect(300,300,50,50);
  
  rect(ground.position.x, ground.position.y, 600, 50);
  
  ellipseMode(RADIUS)
  ellipse(ball.position.x, ball.position.y, 20);
  
}
  