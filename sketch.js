var box
function setup() {
  createCanvas(900,900);
  box = createSprite(500,500,100,100)
  box.shapeColor=("orange")
}

function draw() 
{
  background(30,67,255);
if(keyIsDown(UP_ARROW)){box.position.y=box.position.y-2}
if(keyIsDown(DOWN_ARROW)){box.position.y=box.position.y+2}
if(keyIsDown(RIGHT_ARROW)){box.position.x=box.position.x+2}
if(keyIsDown(LEFT_ARROW)){box.position.x=box.position.x-2}
  drawSprites()
}




