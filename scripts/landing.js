var pointsArray = document.getElementsByClassName('point');

var animatePoints = function(pointsArray) {
    for(var i=0; i < pointsArray.length; i++) {
      pointsArray[i].style.opacity = 1;
      pointsArray[i].style.transform = "scaleX(1) translateY(0)";
      pointsArray[i].style.msTransform = "scaleX(1) translateY(0)";
      pointsArray[i].style.webkitTransform = "scaleX(1) translateY(0)";
    }; //close for
}; //close ap


//window. can be set to function to perform action
window.onload = function() {
  if (window.innerHeight > 950) {
    animatePoints(pointsArray);
  }

  var sellingPoints = document.getElementsByClassName('selling-points')[0];
  var scrollDistance = sellingPoints.getBoundingClientRect().top - window.innerHeight + 200;

  window.addEventListener("scroll", function(event) {
    if(document.documentElement.scrollTop || document.body.scrollTop >= scrollDistance) {
      animatePoints(pointsArray);
    }
  });
};
