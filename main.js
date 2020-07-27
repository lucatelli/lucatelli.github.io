// If you use this, be sure to get your own API key!
//  -> http://www.last.fm/api/account/create

$.getJSON('http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=GefNRock&api_key=623f9658a42636eea867ae8a39a8b490&format=json', function(data) {
  var track = data.recenttracks.track[0]
  $('#lastfm').html(track.artist["#text"] + " - " + track.name)
});