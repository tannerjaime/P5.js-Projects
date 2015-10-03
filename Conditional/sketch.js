var number = 0;
function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(200);
  textAlign(CENTER, CENTER);
}

function draw() {
  if (mouseIsPressed == true){
    background(128);
  } else { 
    background(255);
  }
  
  // changes the color if its divisible by 0
  if (number % 5 == 0){
    fill(128, 128, 0);
  } else {
    fill(0, 0, 128);
  }
  
  text(number, width/2, height/2);
}

//counter must be here otherwise it will constantly count
function mousePressed () {
  number += 1; 
}