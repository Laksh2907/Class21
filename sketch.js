var fixedRect, movingRect;
var gameObject;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 500, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  gameObject=createSprite(100,100,50,50);
  gameObject.shapeColor="green";
  movingRect.velocityY=+1;
  fixedRect.velocityY=-1;
}

function draw() {
  background(0,0,0);  
  //movingRect.x = World.mouseX;
  //movingRect.y = World.mouseY;
bounceOff(movingRect,fixedRect)
  if(isTouching(movingRect,gameObject)){
    movingRect.shapeColor = "red";
    gameObject.shapeColor = "red";

  }
  else{
    movingRect.shapeColor = "green";
    gameObject.shapeColor = "green";
  }
  drawSprites();
}
