var runTime = 0; 
var startTime = 0; 

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(200); 
}

function draw() {
  background (255); 
  if ( startTime > 0 ) { 
  runTime = millis() - startTime; 
  } 
  text(nf(runTime, 4, 2), width/2, height/4);
  
}

function mousePressed() {
  startTime = millis(); 
  
}