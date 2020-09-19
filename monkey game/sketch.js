var monkey,monkey_running
var bg,jungle
var invisibleground
var obstaclesGroup, obstacle1
var bananaGroup, banana1
var score=0;
function preload() {
monkey_running=
loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
jungle=loadImage("jungle.jpg")
  obstacle1 = loadImage("stone.png");
  banana1 = loadImage("banana.png");
  
}

function setup() {
  createCanvas(500, 400);
 bg=createSprite(300,150,20,50);
  bg.x = bg.width /2;
  bg.velocityX = -5;
  invisibleground=createSprite(200,380,600,50);
  invisibleground.visible = false;
  bg.addAnimation("jungle.jpg",jungle);
  monkey=createSprite(50,350,20,50);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.15;
  obstaclesGroup = new Group();
 bananaGroup = new Group();

}

function draw() {
  background(180);
   if(keyDown("space")) {
    monkey.velocityY = -30;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8
  if (bananaGroup.isTouching(monkey)){
    score=score+1
    monkey.scale=monkey.scale+0.05
    bananaGroup.destroyEach();
   }
  if (obstaclesGroup.isTouching(monkey)){
  monkey.scale=0.2
  }
   if (bg.x < 0){
    bg.x = bg.width/2;
  }
  if(keyDown("space") && monkey.y >= 50){
      monkey.velocityY = -12 ;
  }
   monkey.collide(invisibleground);
  drawSprites();
  text("Score: "+ score, 250, 200);
  spawnproblem();
   spawnfood();
}

function spawnproblem() {
  //write code here to spawn the clouds
  if (frameCount % 300 === 0) {
    var stone = createSprite(600,330,40,10);
    stone.scale=0.5
    stone.addImage("problem",obstacle1);
    stone.scale = 0.2;
    stone.velocityX = -5;
    
     //assign lifetime to the variable
    stone.lifetime = 200;
    
    //adjust the depth
    
    
    //add each cloud to the group
    obstaclesGroup.add(stone);
  }
  
}
function spawnfood() {
  //write code here to spawn the clouds
  if (frameCount % 80 === 0) {
    var banana = createSprite(600,50,40,10);
    banana.scale=0.2
    banana.addImage("good",banana1);
    banana.scale = 0.1;
    banana.velocityX = -5;
    
     //assign lifetime to the variable
    banana.lifetime = 200;
    
    //adjust the depth
    
    
    //add each cloud to the group
    bananaGroup.add(banana);
  }
  
}



