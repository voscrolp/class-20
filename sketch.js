
var fixedRect,movingRect

function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(200, 100, 80, 50);
  fixedRect.shapeColor="green";
 // fixedRect.velocityX = 2;
  fixedRect.velocityY = 2;
  fixedRect.debug=true;
  movingRect=createSprite(200, 400, 50, 80);
  movingRect.shapeColor="green";
  //movingRect.velocityX = -2;
  movingRect.velocityY = -2;
  movingRect.debug=true;
}

function draw() {
  background(0);  

  //movingRect.x = mouseX;
 // movingRect.y = mouseY;
  if(movingRect.x - fixedRect.x <= (movingRect.width+fixedRect.width)/2
    && fixedRect.x - movingRect.x <= movingRect.width/2+fixedRect.width/2)
    {
      movingRect.velocityX = -movingRect.velocityX;
      fixedRect.velocityX = -fixedRect.velocityX;
    }
    if(movingRect.y -fixedRect.y <= movingRect.height/2+fixedRect.height/2
    && fixedRect.y - movingRect.y  <= movingRect.height/2+fixedRect.height/2){

      movingRect.velocityY = -movingRect.velocityY;
      fixedRect.velocityY = -fixedRect.velocityY;

      movingRect.velocityX = random(movingRect.velocityX);
      fixedRect.velocityX = random(fixedRect.velocityX);
  
  }
  
  
  drawSprites();
}