var posX = []; //array for horizontal positions 
var posY = []; //array for vertical positions 
var index = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  beginShape();
  //first parameter: x pos, second parameter: y pos
  for (var i = 0; i < 9; i++) {
    vertex(posX[i], posY[i]);
  }
  endShape(CLOSE);
}

function mouseClicked() {
  posX[index] = mouseX;
  posY[index] = mouseY;
  console.log('posX: ' + posX[index] + 'posY; ' + posY[index]);
  index++;
  if (index >= 10){
    index = 0;
  }
}