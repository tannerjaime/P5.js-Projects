//store the data
var table;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
  textAlign(CENTER);
  textSize(18);
  //load data into string array
  table = loadTable("nonAg.txt", "tsv", "header", showData);
}


//call back function when table is loaded
function showData() {
    //count the rows in our table
    var count = table.getRowCount();
    
    var rowHeight = 30;
    for (var row = 0; row < count; row++) {
      // text(data[i], 50, 50+i*20);
      for (var col = 0; col < 26; col++) {
        var val = table.getString(row, col);
        text(val, col*60, 20 + row * rowHeight);
      }
    }
}