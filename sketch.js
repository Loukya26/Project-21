
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;

function preload()
{
	
}

function setup() {
	createCanvas(600,400);


	engine = Engine.create();
	world = engine.world;


	var ball_options = {
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}
	//Create the Bodies Here.
	ball = Bodies.circle(100,348,20,ball_options)
	World.add(world,ball)
	ground = new Ground(300,370,650,10)
	left = new Ground(400,328,10,70)
	right = new Ground(550,328,10,70)


	
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  Engine.run(engine);
ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20)
  ground.display()
  left.display()
  right.display()
  
  drawSprites();
 
}

function hForce(){
	Matter.Body.applyForce(ball,{x:ball.position.x,y:ball.position.y},{x:30,y:-60})
 }

function keyPressed(){
	if(keyCode == UP_ARROW){
		hForce()
	}	
}
