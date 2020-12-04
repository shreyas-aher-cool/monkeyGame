
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var bananaGroup, obstacleGroup;
var score=0,survivalTime;
var ground,invisibleGround;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {

  createCanvas(600, 400);
  
monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  

  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  
  console.log(ground.x);
  
    

 invisibleGround=createSprite(400,360,900,10);
  invisibleGround.visible=false;

  bananaGroup=new Group();
  obstacleGroup=new Group();
  
}


function draw() {
background(225);
 
  //creating survival time
 stroke("white");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("survivalTime:"+survivalTime,100,50);
  
  
 if(ground.x<0){
ground.x=ground.width/2; 
 }
  
  monkey.collide(invisibleGround);
  
  if(keyDown("space")){
    monkey.velocityY=-15;
  }
 monkey.velocityY=monkey.velocityY+0.8;
  
  if(bananaGroup.isTouching(monkey)){
    score=score+2;
    bananaGroup.destroyEach();
    
  }
  
   
  
  Obstacle();
  banana();
  
  drawSprites();
  stroke("white");
  textSize(20);
  fill("black");
  text("score:"+score,250,50)
}

function Obstacle(){
 if(frameCount%100===0){
 var obstacle=createSprite(500,325,20,50);
  obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
   obstacle.lifetime=90;  
obstacle.velocityX=-6  ;       
 obstacleGroup.add(obstacle);  
   
   
 }  
}


function banana() {
  //write code here to banana
  if (frameCount % 80 === 0) {
    var banana = createSprite(300,120,40,10);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    banana.lifetime=90;
    bananaGroup.add(banana);
  }
}


