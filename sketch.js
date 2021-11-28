
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var groundObj;
var leftSide;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	groundObj=new Ground(width/2,690,width,20)
	leftSide= new Ground(1100,600,20,120)

	//Create the Bodies Here.
	var ball_options = {
		isStatic: false,
		restitution: 0.3,
		friction: 0,
		density: 1.2
	}

	ball = Bodies.circle(200, 200, 10, ball_options);
	World.add(world, ball_options);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  
  ellipse(ball.position.x, ball.position.y, 10);

  groundObj.show();
  leftSide.show();
	
	

  drawSprites();
 
}



