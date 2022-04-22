var solo
var parede1
var parede2
var bola

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
    var options = {
    isStatic: true 

	} 
	//Create the Bodies Here.
   var otitionsball = {
 restitution: 1

   }
  bola = Bodies.circle(30,600,30,otitionsball)
  World.add(world,bola)
  
  solo = Bodies.rectangle(400,680,800,20,options)
   World.add(world,solo)
	Engine.run(engine);
   parede1 = Bodies.rectangle(550,600,20,120,options)
    World.add(world,parede1)
   parede2 = Bodies.rectangle(750,600,20,120,options) 
    World.add(world,parede2)


}


function draw() {
 ellipseMode(RADIUS);
  rectMode(CENTER);
  background(0);
 rect(parede1.position.x,parede1.position.y,20,120) 
 rect(parede2.position.x,parede2.position.y,20, 120) 
 rect(solo.position.x,solo.position.y,800,20)
 ellipse(bola.position.x,bola.position.y,30)
 drawSprites();
 
}

function keyPressed(){
 if (keyCode==87){
 Matter.Body.applyForce(bola,{x:0,y:0},{x:0.1,y:-0.2})
 }

}

