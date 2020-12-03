
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var wall1;


function preload()     
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	 
	
	//Create the Bodies Here.
	
	Ground = new ground(600,height,1200,20);

	circle = new paper(100,200,30);

	wall1 = createSprite(600,640,10,100);
	wall1.shapeColor = "red";
	wall1 = createSprite(520,685,150,10);
	wall1.shapeColor = "red";
	wall1 = createSprite(443,640,10,100);
	wall1.shapeColor = "red";


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Ground.display();
  wall1.display();
  circle.display();

  
  drawSprites();
 
}
function keyPressed(){
	if(keyDown === UP_ARROW){

		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
	}
}


