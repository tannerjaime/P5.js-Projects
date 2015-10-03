function setup() {
  createCanvas(windowWidth, windowHeight);
  background(128, 255, 0);
  rectMode(CENTER);
}

function draw() {
   //erase everything, blank slate
  background(255);
   // change fill to white w/variable transparency
  fill(255, mouseY);
  // draw elipse at mouse position
  ellipse(mouseX, mouseY, 50, 40);
  // change the stroke for our line transparency
  stroke(0, mouseY);
  // draw line
  line(0, 0, mouseX, mouseY); 
  // changing the mapped fill color for the rectangle
  // map remaps a given range to a new one
  fill(0, 0, 255, map(mouseY, 0, height, 0, 255));
  // draw rectangle
  rect(mouseX, mouseY, 55, 55, 20);
}