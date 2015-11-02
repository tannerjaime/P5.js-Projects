// LEAFLET.JS EARTHQUAKE VISUALIZATION
// USGS DATA - SOURCE UPDATED EVERY 5 MINUTES
// JavaScript library available at http://leafletjs.org/

var map; // global
var canvas; // p5 canvas
var quakes = []; // array of earthquakes 
var mags = [];
var depth = []; // array of magnitudes
var allDepth = [];
var allMags = [];
var timeStamp = [];
var timeStampAll = [];
var slider; // UI for setting minimum magnitude
var magnitude; // div for storing min magnitude from slider 
var details;
var bla;
var checker = false;
var quakeDate = [];
var quakeHour = [];
var quakeDateAll = [];
var quakeHourAll = [];

function setup() {
  canvas = createCanvas(windowWidth, windowHeight); // full window p5 canvas
  canvas.parent('map'); // make p5 and leaflet use the same canvas (and z-index)
  initLeaflet(); // load leaflet functions and creat map and defined view
  loadStrings("http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_month.csv", parseSource);
  loadStrings("http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.csv", parseAll); // load source, parse when done

  //lower details 


  // title context
  var div = createDiv('<b>Earthquakes Today</b>');
  div.id("top");
  div.position(30, 35);

  // differentiate legend from map
  var txt = createDiv('');
  txt.id("top-bg");
  txt.position(0, 0);

  // UI slider
  slider = createSlider(0, 10, 1);
  slider.id("top");
  slider.position(width - 450, 25);

  // slider numeric feedback
  magnitude = createDiv('Min magnitude: ' + slider.value());
  magnitude.id("top");
  magnitude.position(width - 250, 35);
}

function draw() {
  // hide and show individual quakes by checking against slider threshold
  for (var i = 1; i < mags.length; i++) {
    if (mags[i] < slider.value())
      quakes[i].setRadius(0);
    else
      quakes[i].setRadius(mags[i]);
  }

  magnitude.html("Magnitude > " + slider.value() + " RS");
}


function parseSource(data) {
  for (var i = 1; i < data.length; i++) {
    var row = split(data[i], ","); // split every row by the comma
    mags[i] = row[4];
    depth[i] = row[3];
    timeStamp[i] = row[0];

    quakeDate[i] = new Date(timeStamp[i]).getDate();
    quakeHour[i] = new Date(timeStamp[i]).getHours();
    // create custom leaflet marker
    quakes[i] = L.circleMarker([row[1], row[2]], {
      stroke: true,
      color: '#232323',
      weight: 1,
      opacity: 0.3,
      fillOpacity: 0.8,
      fillColor: (234, 34, 0),
    });

    var place = row[13].substr(1);

    // make new labeled markers at lat, lon, 
    quakes[i].addTo(map).on('click', function(e) {
      details = createDiv('');
      details.id("bottom");
      details.position(0, windowHeight * 0.65);
      drawLine(quakes[i]);
    });
  }
}

function parseAll(data) {
  for (var i = 1; i < data.length; i++) {
    var row = split(data[i], ","); // split every row by the comma
    allMags[i] = row[4];
    allDepth[i] = row[3];
    timeStampAll[i] = row[0];

    quakeDateAll[i] = new Date(timeStamp[i]).getDate();
    quakeHourAll[i] = new Date(timeStamp[i]).getHours();
    // create custom leaflet marker
    allDepth
    var place = row[13].substr(1);

  }

}

function drawLine(quake, allQuakes, time) {
  fill(82, 82, 82);
  strokeWeight(3);
  //body lines
  line(width * 0.25, height * 0.82, width * 0.75, height * 0.82);
  var mags = map(quake, 0, 10, height * 0.82, height * 0.85);
  var magsAll = map(allQuakes, 0, 10, height * 0.82, height * 0.85);
  var time = map(quakeDate, 1, 31, width * 0.25, width * 0.75);
  for (var j in quake){
    line()
  }
}




// init leaflet using a custom mapbox
function initLeaflet() {
  // your access token here
  L.mapbox.accessToken = 'pk.eyJ1IjoiY3Jvb2tvb2tvbyIsImEiOiJoSWZlQWhnIn0.BZsl4HSikEgkLjem-3Y8CQ';
  map = L.mapbox.map('map', 'mapbox.light').setView([20, 0], 2);

  function onMapClick(e) {
    // leaflet needs this function, no need to do anything here

  }

  map.on('click', onMapClick);
}