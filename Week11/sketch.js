var x = 30;
var y = 40;
var mousex = -100;
var mousey = -100;
var win = -100;
var obst1x = 100;
var obst1y = 100;
var obst2x = 200;
var obst2y = 200;
var move1x;
var move1y;
var move2x;
var move2y;
function setup() {
  createCanvas(400, 400);
  move1x = floor(random() * 10) + 1;
  move1y = floor(random() * 10) + 1;
  move2x = floor(random() * 10) + 1;
  move2y = floor(random() * 10) + 1;
}

function draw() {
  background(220);
  fill(0,255,0);
  circle(x,y,50);
  fill(100,100,100);
  square(obst1x,obst1y,50);
  fill(200,200,200);
  square(obst2x,obst2y,50);
  fill(0,255,0);
  triangle(350,400,400,350,400,400);
  fill(0,0,0);
  text('Exit',375,395);
  square(mousex,mousey,50);
  if(obst1x >= 400 || obst1x <= 0)
    {
      obst1x = 0;
    }
  if(obst1y >= 400 || obst1y <= 0)
    {
      obst1y = 0;
    }
  if(obst2x >= 400 || obst2x <= 0)
    {
      obst2x = 0;
    }
  if(obst2y >= 400 || obst2y <= 0)
    {
      obst2y = 0;
    }
  obst1x += move1x;
  obst1y += move1y;
  obst2x += move2x;
  obst2y += move2y;
  
  text('You win!',win,win)
  if(x >= 370 && y >= 370)
    {
      win = 150;
    }
}

function keyPressed()
{
  if (key == 'd')
    {
      x+=15;
    }
  else if (key == 'a')
    {
      x-=15;
    }
  else if (key == 'w')
    {
      y -=15;
    }
  else if (key == 's')
    {
      y +=15;
    }
}

function mousePressed()
{
  mousex = mouseX;
  mousey = mouseY;
}