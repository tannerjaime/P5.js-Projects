function preload () {
  var img = createImg("EthiopiaLong.png");
  img.id("background-img");
  img.class("bg");
  
}

function setup() {
  var can = createCanvas(windowWidth, windowHeight);
  background(203, 187, 155, 100);
  
  can.parent(img);
  var div = createDiv('');
  div.id("top-bg");
  div.position(((width * 60)/100), 50);


  // var txt = createDiv('<b>Earthquakes Today</b>');
  // txt.id("top");
  // txt.position(30, 35);
}

function draw() {
  fill(255, 0, 0);
  textSize(30);
  text("aoisdjfoiajsdfoijasoifoaisjfoiasdjfioajsjsof \n \n aosdjf ioajsfoij aoisdfj ", 200, 20);
}