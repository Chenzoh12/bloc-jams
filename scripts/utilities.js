

  var pointsArray = document.getElementsByClassName('point');

  function logIt(callback) {
    callback();
  }

  function testConsole() {
  //Insert functionality here
    console.log("Test: " + i)
  }

  for(var i=0; i<pointsArray.length; i++) {
    logIt(testConsole);
  }
