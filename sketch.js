var box
function setup() {
  createCanvas(400,400);
  box=createSprite(200,200,20,50)
  
}

function draw() 
{
  background("green");
  if(keyDown(RIGHT_ARROW)){
    box.position.x+=5
  }
if(keyDown(LEFT_ARROW)){
  box.position.x-=5
}
if(keyDown(UP_ARROW)){
  box.position.y-=5
}
if(keyDown(DOWN_ARROW)){
  box.position.y+=5
}
drawSprites()


}




