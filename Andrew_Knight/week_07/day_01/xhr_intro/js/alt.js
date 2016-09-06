window.onload = function () {

  var btn = document.querySelector("button");
  btn.addEventListener("click", function () {


    console.log("The button was clicked");
    var request = new XMLHttpRequest();
    var search = document.querySelector("text");
    console.log(search);
    var url = "http://omdbapi.com?t=" + search;
  //
    request.onreadystatechange = function () {
      var readyState = request.readyState;
      console.log("The readyState is now: " + request.readyState );
      if ( readyState !== 4 ) {
        return false;
      }
      var resultsAsString = request.responseText;
      var resultsAsObject = JSON.parse( resultsAsString );

    request.open( "GET", url );
    request.send();

};

});
};
