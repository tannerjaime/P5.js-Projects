function setup() {
  createCanvas(700, 700);
  rectMode(CENTER);
}

function draw() {
  background(255);
  //copies and moves 100 to right and 100 down
  //this is the origin, they will always move together form that origin, 
  //unless use push pop
  push();
  translate(100, 100);
  //radians goes from 0 to 2pi
  //not in degrees, in radians
  rotate(radians(mouseX));
  rect(0, 0, 100, 100); 
  pop();
  
  //square that responds to mouse movement on y-axis
  push();
    translate(300, 100);
  rotate(radians(mouseY));

  rect(0, 0, 100, 100);
  pop();
}