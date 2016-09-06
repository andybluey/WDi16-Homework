$(document).ready(function() {

   var request = new XMLHttpRequest(); //new instance of the XML HTTP Request
   var $btn = $("button");

   $btn.on("click", function(){
      var movieTitle = $('input').val();
      console.log(movieTitle);
      var multiSearchURL = "http://omdbapi.com?s="+ movieTitle;
      var searchURL = "http://omdbapi.com?t="+ movieTitle;
      console.log(searchURL);

      request.onreadystatechange = function (){ //every time the ready state changes, the callback function will be called
      var readyState = request.readyState;
      console.log("The ready state is now: " + request.readyState);
      if (readyState !== 4) {
          return false;}

      resultsAsString = request.responseText; //this is sent as a string because as an http request it only sends back one STRING
      resultsAsObject = JSON.parse(resultsAsString); //this converts a JSON string into an object
      console.log(resultsAsObject);

      for ( var prop in resultsAsObject ) {
         var heading = resultsAsObject[prop];
         if ( prop === "Poster") {
            console.log(prop);
            var moviePoster = resultsAsObject.Poster;
            var $img = $("<img></img>");
            $img.attr("src", moviePoster);
            $("div").prepend($img);
         } else {
         var $row = $("<tr>");
         var $headings = $("<th></th>");
         $headings.text( prop );

         var $details = $("<td></td>");
         $details.text( heading );

         $("table").append( $row );
         $("table").append( $headings );
         $("table").append( $details );

         }
      }
   };

   request.open("GET",searchURL);
   request.send();
   });

});
