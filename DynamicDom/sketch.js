var x, y; 
var input; 
var txtLength = 0; 
function setup() {
  createCanvas (windowWidth, windowHeight); // create canvas window size 
  input = createInput("?"); //make an input type text with default value
  input.style("font-size", "50pt");
  input.style("color", "lavender");
  input.style("background-color", "gray");
  x = width/2; //set initial values for x and y, centered
  y = height/2;
}

function draw() {
  //measure distance between mouse & input
  // dist()
  // difference (delta) between where the input shoud go
  // and where it currently is 
  var dx = mouseX - x; 
  var dy = mouseY - y;
  // update the input position
  x += dx * 0.01//x = x + the distance * 10%
  y += dy * 0.01
  input.position(x-txtLength*30, y); // set input position to mouse position
  noCanvas(); 
}
// evertime someone touches keyboard, function is called
function keyPressed () {
  // measure legnth of hte string in input 
  txtLength = input.value().length; 
  console.log(input.value());
  if (keyCode == ENTER) {
    createElement ("p", input.value()) // will set it as new papagraph!
    input.value("") // clear input 
    
  }
}