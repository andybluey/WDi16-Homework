// var request = new XMLHttpRequest();
//
// request.onreadystatechange = function () {
//   var readyState = request.readyState;
//   console.log("The readyState is now: " + request.readyState );
//   if ( readyState !== 4 ) {
//     return false;
//   }
//   var resultsAsString = request.responseText;
//   var resultsAsObject = JSON.parse( resultsAsString );
//   console.log( resultsAsString );
//   console.log( resultsAsObject );
// };
//
// request.open( "GET", "http://omdbapi.com?t=Satantango");
// request.send();

window.onload = function () {

  var btn = document.querySelector("button");
  btn.addEventListener("click", function () {


    // Find the value of the input
    // Make an XMLHttpRequest asking for information about a partiuclar movie.
    // Once the data comes back
    // Represent the movie on the page
      // Maybe the movie on the page
      // At least, just the image.
      // THen show more information
      // Show all the items that come up under the search (?s=Jaws)
      // Creating elements - appending them
      console.log("The button was clicked");
      var request = new XMLHttpRequest();
      var search = document.getElementsByClassName("search")[0].value;
      var url = "http://omdbapi.com?t=" + search;
      var filmTitle = url.title;
      console.log(filmTitle);

      request.onreadystatechange = function () {
        var readyState = request.readyState;
        console.log("The readyState is now: " + request.readyState );
        if ( readyState !== 4 ) {
          return false;
        }
        var resultsAsString = request.responseText;
        var resultsAsObject = JSON.parse( resultsAsString );
        console.log( resultsAsObject );
      };
      request.open( "GET", url );
      request.send();
      var title = document.createElement('h1');
      var titleText = document.createTextNode(filmTitle);
      document.body.appendChild(titleText);
      document.body.appendChild(title);


  });

};
