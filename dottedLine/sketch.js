function setup() {
  createCanvas(400, 400);
}

function draw() {
  noStroke();
  fill('pink');
  for (var x = 5; x < 100; x = x + 10) {
    ellipse(x, 20, 5, 5);
  }
}