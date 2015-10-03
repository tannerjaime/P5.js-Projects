function setup() {
  createCanvas(windowWidth, windowHeight);

}

function draw() {
  //set background color 
  background(255);
  
  for ( var i=0; i<second(); i ++){
    line (10, i*10, width-10, i*10);
    
  }
}