
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survivalTime;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
 
 monkey=createSprite(80,315,20,20) 
monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(400,350,900,10)
  ground.velocityx=-4;
  ground.x=ground.width/2;
}


function draw() {
   background("white");
  if(keyDown("space")&& monkey.y>=300){
     monkey.velocityY=-17;
     
     }
  
  monkey.velocityY = monkey.velocityY + 0.8
  monkey.collide(ground);
  
  stroke("black")
  textSize(20)
  fill("black")
  survivalTime=Math.ceil(frameCount/frameRate())
  text("survival Time: "+ survivalTime, 100,50)
  
obstacleGroup();
  foodGroup();
drawSprites();
  
}
function foodGroup(){
  if(frameCount% 80===0){
   banana=createSprite(380,20,20,20);
     banana.velocityX=-4; 
    banana.scale=0.1;
   banana.y=Math.round(random(120,200))
    banana.addImage(bananaImage);
   
    
  }
}
function obstacleGroup(){
  if(frameCount% 150===0){
  obstacle= createSprite(300,327,900,10);
  obstacle.velocityX=-4;
  
  var rand=Math.round(random(1,6))
  obstacle.addImage(obstaceImage);
    obstacle.scale=0.1;
  }  
}

  
  





