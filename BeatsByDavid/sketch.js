function preload() {
  mySound = loadSound('Boop.m4a');
  Sound2 = loadSound('TiTiKuh.m4a');
  Sound3 = loadSound('OOGH.m4a');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(36, 37, 40);

//boop
  boop = createButton('BOOP');
  boop.position(width * 0.5, height * 0.25);
  boop.id("boop");

  $('#boop').click(function() {
    mySound.setVolume(0.2);
    mySound.play();
  });
  $('#boop').on('click touchstart', function() {
    mySound.setVolume(0.2);
    mySound.play();
  });

//ti ti kuh
  titikuh = createButton('TT KUH');
  titikuh.position(width * 0.5, height * 0.5);
  titikuh.id("titikuh");

  $('#titikuh').click(function() {
    Sound2.setVolume(0.2);
    Sound2.play();
  });
  $('#titikuh').on('click touchstart', function() {
    Sound2.setVolume(0.2);
    Sound2.play();
  });

//OOGH
  OOGH = createButton('OOGH');
  OOGH.position(width * 0.5, height * 0.75);
  OOGH.id("oogh");
  
    $('#oogh').click(function() {
    Sound3.setVolume(0.2);
    Sound3.play();
  });
  $('#oogh').on('click touchstart', function() {
    Sound3.setVolume(0.2);
    Sound3.play();
  });


}

function draw() {

}