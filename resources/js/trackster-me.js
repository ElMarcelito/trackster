// LAST FM API
// API key f33d629e08ad7176b09ffa1cda098180
// shared secret 2019e7d3f7fbd11b6c634eb3b21f6190


$(document).ready(function() {
const API_KEY = "f33d629e08ad7176b09ffa1cda098180";

  $("#search-btn").click(function() {
    var search = $("#search").val();
    console.log("done1");
    Trackster.searchTracksByTitle(search);
    console.log("done2");
  });

  $.ajax({
    url: 'http://ws.audioscrobbler.com/2.0/?method=track.search&track=' + search + '&api_key=' + API_KEY + '&format=json',
    datatype: 'jsonp',
    success: function(data) {
      console.log(data);
    }
  });



var Trackster = {};

/*
  Given an array of track data, create the HTML for a Bootstrap row for each.
  Append each "row" to the container in the body to display all tracks.
*/
Trackster.renderTracks = function(tracks) {

};

/*
  Given a search term as a string, query the LastFM API.
  Render the tracks given in the API query response.
*/
Trackster.searchTracksByTitle = function(title) {
  console.log("done3");
  console.log("done4");
};
});
