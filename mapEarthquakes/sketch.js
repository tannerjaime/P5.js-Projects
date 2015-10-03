var table;
var xPoints = [];
var yPoints = [];
var rangeLow1 = 0;
var rangeHigh1 = 200;
var rangeLow2 = 2.5;
var rangeHigh2 = 10;

function preload() {
  table = loadTable("http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_day.csv", "csv", "header");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
  noFill();
  background(245, 238, 227);

  var todayHour = hour();
  var todayDate = day();
  print(todayHour);
  var x1 = (width / width) * 40;
  var x2 = width - 40;
  var y1 = (height / height) * 60;
  var y2 = height - 60;
  // var xDiff = (width - 40) - 40;
  var xDiff = x2 - x1;
  var yDiff = y2 - y1;


  //background and top line
  fill(64);
  strokeWeight(0.75);
  // line(x1, y1, x2, y1);

  // calculate day lines
  for (var i = 1; i < 25; i++) {
    var countX = xDiff / 24;
    xPoints.push(countX * [i]);
  }
  for (i = 1; i < 11; i++) {
    var countY = yDiff / 10;
    yPoints.push(countY * [i]);
  }

  //draw axis lines 
  for (i = 0; i < xPoints.length; i++) {
    line(xPoints[i], y1, xPoints[i], y2);
    fill(0);
    text(i, xPoints[i] - 5, y1 - 10);
  }
  strokeWeight(0.25);
  for (i = 0; i < 9; i++) {
    // for (var d = x1; d < x2; d = d + 10) {
    //   ellipse(x1, x2, 4, 4);
    // line(x1, yPoints[i] + 60, x2, yPoints[i] + 60);
    fill(151, 96, 79, 40);
    noStroke();
    rect(width / width, yPoints[i] + 60, width, height - (yPoints[i] + 60));

  }

  for (i = 1; i < yPoints.length; i++) {
    // for (i = x1; i < x2; i +=5)
    // line(x1, yPoints[i] + 60, x2, yPoints[i] + 60);
    // ellipse(x1, yPoints[i] + 60, 5, 5)
    fill(0);
    text(i * 20, x2 - 20, yPoints[i] - 5);
  }
  fill(0);
  textSize(15);
  text("Relative Time (hours)", width / 2, y1 - 40);
  textSize(15);
  text("Depth (km)", x2 - 35, y1 + 13);



  // access data
  for (var r = 0; r < table.getRowCount(); r++) {
    var currentRow = table.getRow(r);
    var timeStamp = currentRow.getString(0);
    var depth = currentRow.getNum(3);
    var magnitude = currentRow.getNum(4);
    var quakeDate = new Date(timeStamp).getDate();
    var quakeHour = new Date(timeStamp).getHours();
    var depthDist = map(depth, rangeLow1, rangeHigh1, y1, y2);
    var magSize = map(magnitude, rangeLow2, rangeHigh2, 10, Math.pow(15, 2));
    console.log(quakeHour + "nonmodulo");
    // console.log(todayHour + 'tdy');
    noStroke();
    fill(255, 0, 0, 70);




    //now get days to different lines 
    if (todayHour > quakeHour) {
      quakeHour = todayHour - quakeHour;
      // print(quakeHour);
      for (i = 1; i < 25 + 1; i++) {
        if (quakeHour == i) {
          ellipse(xPoints[i - 1], depthDist, magSize, magSize);
          console.log(quakeHour);
        }
      }
    } else if (todayHour < quakeHour) {
      quakeHour = (24 - quakeHour) + todayHour;
      // print(quakeHour);
      for (i = 1; i < 25 + 1; i++) {
        if (quakeHour == i) {
          ellipse(xPoints[i - 1], depthDist, magSize, magSize);
          console.log(quakeHour);
        }
      }
    } else if (quakeHour == todayHour) {
      quakeHour = 24;
      // print(quakeHour);
      for (i = 1; i < 25 + 1; i++) {
        if (quakeHour == i) {
          ellipse(xPoints[i - 1], depthDist, magSize, magSize);
          console.log(quakeHour);
        }
      }
    } else {
      print("nope!");
    }
  }

  var smallSample = map(2.5,rangeLow2, rangeHigh2, 10, Math.pow(15, 2));
  var medSample = map(4.5, rangeLow2, rangeHigh2, 10, Math.pow(15, 2));
  var bigSample = map(6.0, rangeLow2, rangeHigh2, 10, Math.pow(15, 2));

    
  ellipse(width / 5, height - ((y1 - (height / height)) / 2), smallSample, smallSample);
  ellipse(width / 2, height - ((y1 - (height / height)) / 2), medSample, medSample);
  ellipse(width / 1.35, height - ((y1 - (height / height)) / 4), bigSample, bigSample);
  // ellipse(width / 1.25, height - ((y1 - (height / height)) / 4), biggestSample, biggestSample);
  fill(0);
  textSize(12);
  text("earthquake with 2.5 magnitude", width / 5 + 20, (height - ((y1 - (height / height)) / 2)) + 5);
  text("earthquake with 5.5 magnitude", width / 2 + 40, (height - ((y1 - (height / height)) / 2)) + 5);
  text("earthquake with 6.0 magnitude", width / 1.35 + 80, (height - ((y1 - (height / height)) / 2)) + 5);

}