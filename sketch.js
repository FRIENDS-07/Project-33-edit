const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint
 
var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;
var score = 0;
var count = 0;
var particle;
var gamestate = "play";

function setup(){
  
  createCanvas(800, 800);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2,height,width,20);

  for(var k = 0; k <= width; k = k + 80){
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for(var j = 75; j <= width; j=j+50){
    plinkos.push(new Plinko(j,75));
  }

  for(var j = 50; j <= width-10; j=j+50){  
    plinkos.push(new Plinko(j,175));
  }

  for(var j = 75; j <= width; j=j+50){
    plinkos.push(new Plinko(j,275));
  }

  for(var j = 50; j <= width-10; j=j+50){
    plinkos.push(new Plinko(j,375));
  }
    
}

function draw(){

  background("black");
  textSize(20)

  Engine.update(engine);
 
  for(var i = 0; i < plinkos.length; i++){
    plinkos[i].display();
  }

  if(frameCount % 60 === 0){
    particles.push(new Particle(random(200,600), 10,10));
    score++;
  }
 
  for(var j = 0; j < particles.length; j++){
    particles[j].display();
  }

  for(var k = 0; k < divisions.length; k++){
    divisions[k].display();
  }

  for(var l = 18; l < 300; l = l + 78){
    textSize(30);
    text("500",l,520);
  }

  for(var m = 337; m < 550; m = m + 78){
    textSize(30);
    text("200",m,520);
  }

  for(var n = 576; n < 750; n = n + 78){
    textSize(30);
    text("100",n,520);
  }

  if(particles.y > 475 && particles.x < 300){
    score = score + 500;
    particle = null;
  }
  
}

function mousePressed(){

  if(gamestate === "play"){
    count = count + 1;
    particle = new Particle(mouseX,10,10);
  }

}

