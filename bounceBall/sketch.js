// x position variable
var xpos = 0;
var gobackwards = false;
 
function setup() 
{
  // set canvas size
  createCanvas(400, 400);
}
 
function draw() 
{
  // clear background
  background(255);
 
  // set the fill color
  fill(255, 0, 0);
 
  // black outline
  stroke(0);
 
  // set the ellipse mode
  ellipseMode(CENTER);
 
  // increment x variable
  if (!gobackwards){
    xpos = xpos + 2; 
  } else {
  xpos = xpos - 2;
  }
  // if the circle moves off screen, reset it's position
  if(xpos > width)
  {
    gobackwards = true;
  }
  if (xpos < 0){
    gobackwards = false;
  }
 
  // draw a circle
  ellipse(xpos, xpos, 25, 25);	
 
  // display xpos variable
  fill(0);
  text("xpos = " + xpos, 25, 25);
}