function pageLoaded() {
  alert('page has loaded')
}



var video = document.querySelector('.video');
var btn = document.getElementById('playpause');
var back = document.getElementById('backbutton');



// Set up Player Controls

function togglePlayPause() {
  if (video.paused) {
  btn.playpause = 'pause';
  video.play();
  }
  else {
    btn.playpause = 'play'
    video.pause();
  }
}

btn.onclick = function() {
  alert("play!!");
};


