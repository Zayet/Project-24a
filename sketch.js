var paper1, bucket1,bucket2,bucket3;
var ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 500);
    //ground(790,700)

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground = new Bucket(400,480,800,20);
	bucket1 = new Bucket(630,435,10,50);
	bucket2 = new Bucket(689,465,104,10);
	bucket3 = new Bucket(747,435,10,50);

    paper1 = new Paper(50,400);
	Engine.run(engine);

   
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper1.display();
  ground.display();
  bucket1.display();
  bucket2.display();
  bucket3.display();
  drawSprites();
 
}

function keyPressed() {
   if(keyCode === "UP_ARROW"){
   Matter.Body.applyForce(paper1.Body,paper1.Body.position,{x : 85, y : -85})
   }
}

