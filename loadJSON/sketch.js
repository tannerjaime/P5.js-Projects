function setup() {
  createCanvas(windowWidth, windowHeight);
  loadJSON("data.json", displayData);
}

function draw() {

}

//dont need to save loadJSON 
function displayData(data) {
  // will always grab first thing that it sees 
  // i is not a number now, so can't use as counter
  var counter = 0;
  var childCounter = 0;
  for (var i in data) {
    text('name' + " : " + data[i].name, 300, 100 + counter * 20);
    for (var j in data[i].child) {
      text(j, 500 + childCounter * 100, 100 + childCounter * 20);
      childCounter++;
    }

    counter++;
  }


  // text(data.keys(data), 300, height/2);
}