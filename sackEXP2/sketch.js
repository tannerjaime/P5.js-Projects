var arr = [];
var scoreArr = [];
var scoreObj = {};
var li = [];
var essay = [];
var textX = 0;
var colorMood;
var x = 20;
var y = 50;
var ysize = 25;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(86);
  // filter(BLUR,1);
  loadJSON("sackScore.json", displaySent);

}

function displaySent(data) {
  for (var i in data) {
    scoreObj[data[i].tokens[0]] = data[i].score;
  }

  arr = loadStrings("sabbath.txt", processData);
}


function processData() {
  for (var i in arr) {
    li.push(arr[i].split(" "));
  }
  for (i = 0; i < li.length; i++) {
    essay = Array.prototype.concat.apply([], li);
  }
  // console.log(essay);


  //part 1 - family - 512 words 
  for (var z = 0; z < 512; z++) {
    fill(230);
    textSize(ysize);

    if (scoreObj[essay[z]] > 0 ) {
      textStyle(BOLD);
      fill(110, 219, 179);
    } else if (scoreObj[essay[z]] < 0 ) {
      textStyle(BOLD);
      fill(219, 142, 110);
    } else 
    textStyle(NORMAL);
    
    
    if (x < width - 100) {
      text(essay[z], x, y).filter(BLUR, 1);
      x += textWidth(essay[z]) + 10;
      
    } else {
      x = 20;
      y += ysize + 2;
      text(essay[z], x, y);
      x += textWidth(essay[z]) + 10;
    }
  }
  // fill(255, 0, 0);
  // textSize(20);
  // text(essay, 30, 30, windowWidth - 50, windowHeight - 50);
  // print(scoreObj);
}




function draw() {
  // background(84);


  noLoop();
}

//if x > width
//set x=0 and y+= 50
//x+= textWidth(essay[i])
//daisy chain - load one table inside another 




// if (scoreArr[i][0] == li[i] && scoreArr[i][1] > 0) {
//   fill(110, 219, 179);
//   text(essay[i], random(0, windowWidth), random(0, windowHeight));
// } else if (scoreArr[i][0] == li[i] && scoreArr[i][1] < 0) {
//   fill(219, 142, 110);
//   text(essay[i], random(0, windowWidth), random(0, windowHeight));
// } else if (scoreArr[i][0] == essay[i] && scoreArr[i][1] < 0) {
//   fill(84);
//   text(essay[i], random(0, windowWidth), random(0, windowHeight));
// }