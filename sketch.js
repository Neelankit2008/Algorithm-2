var fixedRect, movingRect;

var car,wall;


function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = false;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = false;

  car = createSprite(400, 200, 50, 80);
  car.shapeColor = "blue";
  car.debug = false;
  car.velocityX=4;
  wall = createSprite(700,200,80,30);
  wall.shapeColor = "yellow";
  wall.debug = false;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
if( isTouching(movingRect, fixedRect)){
  movingRect.shapeColor = "red";
  fixedRect.shapeColor = "red";
}
else{
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
}

bounceOff(car,wall);
  
  drawSprites();
}

