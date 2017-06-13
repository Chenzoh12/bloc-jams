var points = document.getElementsByClassName('point');

var revealPoints = function(index) {
  for(var i=0; i < index.length; i++) {
    index[i].style.opacity = 1;
    index[i].style.transform = "scaleX(1) translateY(0)";
    index[i].style.msTransform = "scaleX(1) translateY(0)";
    index[i].style.webkitTransform = "scaleX(1) translateY(0)";
  };
};

revealPoints(points);
