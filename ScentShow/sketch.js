var firstText = [];
var result;
var check = false;
var z = 0;
var counter = 0;

function setup() {
  frameRate(2);
  createCanvas(windowWidth, windowHeight);
  var backColor = color(36, 37, 40);

  background(backColor);

  table = loadTable("data.txt", "tsv", showData);

}


function showData() {
  firstText.push(table.getString(0, 0));
  check = true;
}

function draw() {
  var backColor = color(36, 37, 40);
  var lineColor = color(102, 95, 83);
  fill(lineColor);
  textSize(30);
  if (firstText.length > 0) {
    result = firstText[0].match(/[^\.!\?]+[\.!\?]+/g);


    if (check) {
      if (z < result.length && counter == 1) {
        fill(backColor)
        rect(0, 0, width, height);
        fill(lineColor);
        textFont("Sanchez");
        textAlign(CENTER);
        text(result[z], random((width * 0.4), width - (width * 0.4)), random(100, height - 200), width * 0.4);
        z++;
        counter = 0;
      }
    }
    counter++;

  }
}