
var box
var box2
function setup(){
  createCanvas(400,400)
  box=createSprite(200,200,20,20)
  box2=createSprite(100,100,30,30)
  box2.shapeColor="turquoise"
  edges = createEdgeSprites()
  box.velocityX = 2
  box.velocityX = -2
  box2.velocityY = -3
}

function draw(){
  
  background("black")
  box.bounceOff(edges[1])
  box.bounceOff(edges[0])
  box2.bounceOff(edges[2])
  box2.bounceOff(edges[3])
  drawSprites()
  
  }



