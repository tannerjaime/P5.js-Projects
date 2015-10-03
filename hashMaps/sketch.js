var arr = [];
var hash = [];
var sorted = [];
var textX = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  arr = loadStrings("poem.txt", processData);
}

function processData() {
  fill(128, 128, 0);

  for (var i in arr) {

    text(arr[i], 150, 50 + i * 20);

    //split each line
    var li = arr[i].split(" ");
    for (var k in li) {
      // / is always escape(ignore)
      // \* wildcard
      // MUST USE \ with wildcards
      var clean = li[k].replace(/[.,-\/!a#$%\*^&*():{}]/g, "");

      //counts each word type
      if (hash[clean] >= 1)
        hash[clean]++;
      else
        hash[clean] = 1;
    }
  }
  for (i in hash) {
    console.log(i + ": " + hash[i]);
  }

  //SORY HASH MAP

  // populated sorted array with al words from hash 
  for (i in hash)
    sorted.push([i, hash[i]]);

  //now sort
  sorted.sort(function(a, b) {
    a = a[1];
    b = b[1];

    //? = should return, : = otherwise 
    return a < b ? 1 : (a > b ? -1 : 0);
  });

  console.log("SORTED======");
  for (i = 0; i < sorted.length; i++) {
    console.log(sorted[i][0] + " : " + sorted[i][1]);
  }

}



function draw() {
  background(255);
  translate(textX, 0);
  for (i=0; i<sorted.length; i++){
    var txtSize = sorted[i][1] * 30;
    textSize(txtSize);
    text(sorted[i][0], 0 , 100);
    translate(textWidth(sorted[i][0]), 0);
  }
}

//mousedown + move
function mouseDragged () {
  textX += mouseX - pmouseX;
  
}