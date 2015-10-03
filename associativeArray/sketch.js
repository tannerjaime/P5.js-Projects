var arr = [];

arr["name"] = 'stephen';
arr['age'] = 51;
arr['city'] = 'Charleston';

function setup() {
  for (var i in arr) {
    //i = key, arr[i]  = value
    console.log(i + ": " + arr[i]);
    console.log("i am a:" + typeof(arr));
  }
}

function draw() {

}


if (todayHour > 12 && quakeHour > 12 && todayHour > quakeHour) {
  quakeHour = todayHour % quakeHour;
  // print(quakeHour);
  for (i = 1; i < 25 + 1; i++) {
    if (quakeHour == i) {
      ellipse(xPoints[i - 1], depthDist, magSize, magSize);
      // console.log(quakeHour);
    }
  }
} else if (todayHour > 12 && quakeHour > 12 && todayHour < quakeHour) {
  quakeHour = ((todayHour + 12) % quakeHour) + 12;
  print(quakeHour);

  for (i = 1; i < 25 + 1; i++) {
    if (quakeHour == i) {
      ellipse(xPoints[i - 1], depthDist, magSize, magSize);
      // console.log(quakeHour);
    }
  }
} else if (todayHour < 12 && quakeHour > 12) {
  quakeHour = todayHour % quakeHour;
  print(quakeHour);

  for (i = 1; i < 25 + 1; i++) {
    if (quakeHour == i) {
      ellipse(xPoints[i - 1], depthDist, magSize, magSize);
      // console.log(quakeHour);
    }
  }
} else if (todayHour > 12 && quakeHour < 12) {
  quakeHour = quakeHour % (todayHour + 12);
  print(quakeHour);

  for (i = 1; i < 25 + 1; i++) {
    if (quakeHour == i) {
      ellipse(xPoints[i - 1], depthDist, magSize, magSize);
      // console.log(quakeHour);
    }
  }
} else if (todayHour < 12 && quakeHour < 12 && todayHour > quakeHour) {
  quakeHour = quakeHour - (24 - todayTime);
  print(quakeHour);

  for (i = 1; i < 25 + 1; i++) {
    if (quakeHour == i) {
      ellipse(xPoints[i - 1], depthDist, magSize, magSize);
      // console.log(quakeHour);
    }
  }

} else if (todayHour < 12 && quakeHour < 12 && quakeHour > todayHour) {
  quakeHour = quakeHour - (24 - todayTime);
  print(quakeHour);

  for (i = 1; i < 25 + 1; i++) {
    if (quakeHour == i) {
      ellipse(xPoints[i - 1], depthDist, magSize, magSize);
      // console.log(quakeHour);
    }
  }

}else if (quakeHour == todayHour) {
    quakeHour = 12;
  print(quakeHour);

  for (i = 1; i < 25 + 1; i++) {
    if (quakeHour == i) {
      ellipse(xPoints[i - 1], depthDist, magSize, magSize);
      // console.log(quakeHour);
    }
  }
}else {
  print("nope!");
}
}