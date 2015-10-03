var posX = []; //array for horizontal positions 
var posY = []; //array for vertical positions 
var index = 0;

function setup() {
  createCanvas(400, 400);
  fill (200);
}

function draw() {
  //draw polygon
  background(255);
  beginShape(); //start recording shape
  //first parameter: x pos, second parameter: y pos

  for (var i = 0; i < 9; i++) {
    vertex(posX[i], posY[i]);
  }
  endShape(CLOSE); // end recording shape 
// works for countries and states 
  var cX = 0;
  var cY = 0;
  var a = 0;


  for (var i = 0; i < posX.length-1; i++) {
    cX += (posX[i] + posX[i + 1]) * (posX[i] * posY[i + 1] - posX[i + 1] * posY[i]);
    cY += (posY[i] + posY[i + 1]) * (posX[i] * posY[i + 1] - posX[i + 1] * posY[i]);
    a += (posX[i] * posY[i + 1] - posX[i + 1] * posY[i]);

  }
  a *= 1 / 2;
  cX *= 1 / (6 * a);
  cY *= 1 / (6 * a);

  fill('red');
  ellipse(cX, cY, 20, 20);
}

function mouseClicked() {
  posX[index] = mouseX;
  posY[index] = mouseY;
  console.log('posX: ' + posX[index] + 'posY; ' + posY[index]);
  index++;
  if (index >= 10) {
    index = 0;
  }
}