var imageLoaded = false;

function setup() {
  img = loadImage("pic.png", loadImg)
}

function draw() {
  if (imageLoaded) {
    image(img, 0, 0);
  }
}

function loadImg() {
  imageLoaded = true;
}