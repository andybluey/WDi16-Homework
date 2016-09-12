// AIzaSyC1v-neOkqQJTItKYcLFqVaj-0K-s916BE

var baseMapURL = "http://api.open-notify.org/iss-now.json";
var $baseSpace = $(".space");
var $baseSpaceContent = $baseSpace.find(".content");
var $baseMap = $(".map");
var $baseMapContent = $baseMap.find(".content");
var latitude;
var longitude;
var $latitude = $("div .latitude");
var $longitude = $("div .longitude");
var satTime = null;
console.log(latitude, longitude);

var flightPlanCoordinates = [];
var map;

var displayMap = function ( data ) {
  latitude = data.iss_position.latitude;
  longitude = data.iss_position.longitude;
  var coordinates = {lat: latitude, lng: longitude};
  flightPlanCoordinates.push(coordinates);

  $latitude.text( "Latitude: " + latitude.toFixed(2) );
  $longitude.text( "Longitude: " + longitude.toFixed(2) );

  var flightPath = new google.maps.Polyline({
    path: flightPlanCoordinates,
    geodesic: true,
    strokeColor: '#FF0000',
    strokeOpacity: 1.0,
    strokeWeight: 2
  });

  flightPath.setMap(map);
  map.setCenter(coordinates);
};

var getLocation = function () {
  $.ajax({
    url: baseMapURL,
    type: "GET",
    dataType: "JSONP"
  }).done( displayMap );
};

var initMap = function() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: {
      lat: 0,
      lng: 0
    },
    mapTypeId: 'satellite'
  });
};

$(document).ready(function () {
  satTimer = window.setInterval(function () {
    getLocation();
  }, 1000);
  // initMap();
  // displayMap();
});
