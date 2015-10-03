function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  noStroke();
  fill('pink');
  for (var x = 5; x < 400; x = x + 10) {
    ellipse(x, 10 * x / 50 , 5, 5);
  }
  
  
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}