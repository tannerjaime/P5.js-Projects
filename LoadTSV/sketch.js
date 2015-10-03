//store the data
function setup(){
  createCanvas(windowWidth, windowHeight);
  noLoop();
  //load data into string array
  var table = loadTable("nonAg.txt", "tsv", "header", showData);
}

function draw(){
  
}

function showData(table){
//parse the data returned by loadStrings()
  for (var i=0; i<table.getRowCount(); i++) {
    // text(data[i], 50, 50+i*20);
    var amount = table.getString(i,0);
    var unit = table.getString(i,1);
    var item = table.getString(i,2);
    var source = table.getString(i,3);
   
    if (source === "market"){
      fill(0, 255, 0);
    } else {
      fill(255, 0, 0);
    }
    text(amount + " | " + unit + " | " + item + " | " + source, width/2, 30+i*rowHeight); 
  

  }
  
}