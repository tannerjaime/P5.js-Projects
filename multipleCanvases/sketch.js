//store the data
var table;
//check until you get to 100
var minVal = 100;
var maxVal = 0; 

function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
  textAlign(CENTER);
  textSize(18);
  //load data into string array
  table = loadTable("nonAg.txt", "tsv", "header", showData);
  noFill();
}


//call back function when table is loaded
function showData() {
  //count the rows in our table

  var count = table.getRowCount();


  var rowHeight = 30;

  //find highest value
  //determine global min and global
  for (var row = 0; row < count; row++) {
    for (var col = 0; col < 26; col++) {
      var val = table.getString(row, col);
      val = parseFloat(val);
      if (minVal > val){
        minVal = val; 
      }
      if(maxVal < val) {
        maxVal = val; 
      }
    }
  }

  //loop through all the rows 
  for (row = 0; row < count; row++) {
    // text(data[i], 50, 50+i*20);
    beginShape();
    for (col = 0; col < 26; col++) {
      val = table.getString(row, col);
      //make a number out of a string
      val = parseFloat(val);
      // text(val, col*60, 20 + row * rowHeight);
      vertex(col * 60, map(val, minVal, maxVal, height - 20, 20));
    }
    endShape();
  }
}