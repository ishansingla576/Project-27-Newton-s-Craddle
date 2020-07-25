
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function setup() {
	createCanvas(1000, 1000);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(400, 200,300,20);
  bob1 = new Bob(500,400,22);
  bob2 = new Bob(450,400,22);
  bob3 = new Bob(400,400,22);
  bob4 = new Bob(350,400,22);
  bob5 = new Bob(300,400,22);

  rope1 = new Rope(bob1.body,{x:500,y:210});
  rope2 = new Rope(bob2.body,{x:450,y:210});
  rope3 = new Rope(bob3.body,{x:400,y:210});
  rope4 = new Rope(bob4.body,{x:350,y:210});
  rope5 = new Rope(bob5.body,{x:300,y:210});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  textSize(16);
  fill(0);
  text("Press Right Arrow To Move Right Bob",600,200);
  text("Press Left Arrow To Move Left Bob",600,250);
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  drawSprites();
 
}


function keyPressed(){
  if(keyCode === RIGHT_ARROW ){
    Matter.Body.applyForce(bob1.body,bob1.body.position,{x:70,y:-2});
  }
  if(keyCode === LEFT_ARROW ){
    Matter.Body.applyForce(bob5.body,bob5.body.position,{x:-70,y:-2});
  }

}