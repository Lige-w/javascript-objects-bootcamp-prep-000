var playlist = {
  Slowdive: 'Alison',
  'My Bloody Valentine': 'Sometimes'
};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist['Phil Ochs'] = "Here's to the State of Mississippi"
  return playlist
}

function removeFromPlaylist() {
  delete playlist['Slowdive']
}
