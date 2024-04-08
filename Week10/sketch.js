var circX = 200;
var circY = 250;
var circMoveY;
var circMoveX;
var circMove;
var circ1Y = 200;
var circ2Y = 200;
var circ1Move;
var circ2Move;
var rect1X = 265;
var rect1Move;
var rect2X = 115;
var rect2Move;
var size = 16;
var sizeMod = 1;

function setup() {
  createCanvas(400, 400);
  rect1Move = floor(random()*10) +1;
  rect2Move = floor(random()*10) +1;
  circ1Move = floor(random()*10) +1;
  circ2Move = floor(random()*10) +1;
  circMove = floor(random()*10) +1;
  circMoveX = circMove;
  circMoveY = circMove;
}

function draw() {
  background(200);
  circle(circX,circY,150);
  square(127,125,145);
  circle(170,circ1Y,30);
  circle(230,circ2Y,30);
  triangle(125,125,200,100,270,125)
  line(175,275,225,280)
  triangle(175,255,200,245,225,255)
  point(200,250)
  rect(rect2X,200,17,40)
  rect(rect1X,200,17,40)
  text('A. Dean',10,375)
  textSize(size)
  text('Shapes Make The Man',150,30)
  
  if(rect2X >= 400 || rect2X <= 0)
    {
      rect2Move*=-1;
    }
  rect2X += rect2Move;
  if(rect1X >= 400 || rect1X <= 0)
    {
      rect1Move*=-1;
    }
  rect1X += rect1Move;
  if(circ1Y >= 400 || circ1Y <= 0)
    {
      circ1Move*=-1;
    }
  circ1Y += circ1Move;
  if(circ2Y >= 400 || circ2Y <= 0)
    {
      circ2Move*=-1;
    }
  circ2Y += circ2Move;
  if(circY >= 400 || circY <= 0)
    {
      circMoveY*=-1;
    }
  if(circX >= 400 || circX <= 0)
    {
      circMoveX*=-1;
    }
  circY += circMoveY;
  circX += circMoveX;
  if(size >= 35 || size <= 15)
  {
      sizeMod*=-1;
  }
  size+=4*sizeMod;
}