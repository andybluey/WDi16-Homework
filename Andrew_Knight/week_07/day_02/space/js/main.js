var baseSpaceURL = "http://api.open-notify.org/astros.json";
var $baseSpace = $(".space");
var $baseSpaceContent = $baseSpace.find(".content");


var displaySpace = function ( data ) {
  var number = data.number;
  var $p = $("<p></p>");
  $p.text( "Number of space people " + number );

  $baseSpaceContent.prepend( $p );
};

var displaySpaceNames = function ( data ) {
  var search = data.people;
  for (var prop in search ) {
    var detailsOfCraft = search[prop];

  var $p = $("<p></p>");
  $p.text( "Name: " + detailsOfCraft.name + "; Craft: " + detailsOfCraft.craft );

  $baseSpaceContent.prepend( $p );
  }
};

var getSpace = function () {
  console.log( "Fetching space..." );
  $.ajax({
    url: baseSpaceURL,
    type: "GET",
    dataType: "JSONP"
  }).done( displaySpace, displaySpaceNames );
};

$(document).ready(function () {
  getSpace();
});
