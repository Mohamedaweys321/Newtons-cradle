
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roof=new Roof(300,210,300,30);
	bob1=new Bob(200,400,25);
	bob2=new Bob(250,400,25);
	bob3=new Bob(300,400,25);
	bob4=new Bob(350,400,25);
	bob5=new Bob(400,400,25);
	rope1=new Rope(bob1.body,{x:200, y:220});
	rope2=new Rope(bob2.body,{x:250, y:220});
	rope3=new Rope(bob3.body,{x:300, y:220});
	rope4=new Rope(bob4.body,{x:350, y:220});
	rope5=new Rope(bob5.body,{x:400, y:220});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();

}
function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:5,y:-40});

	}
}


