var basicArray = ['un', 'deux', 'trois', 'quatre', 'cinq'];
var poem = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (var i = 0; i < basicArray.length; i++)
    text(basicArray[i], 50, 20 + 50 * i);
  poem = loadStrings("poem.txt", processData);
}

function processData() {
  console.log(poem);
  //this boolean allows it to skip if not working. 
  //good practice! 
  if (poem) {
    for (var i = 0; i < poem.length; i++) {
      console.log(poem[i]);
    }
    //allows us to JUST do for number of rows 
    //so we dont have to loop through row counts 
    for (i in poem) {
      text(poem[i], 150, 20 + i * 10);
    }
  }
}



function draw() {

}