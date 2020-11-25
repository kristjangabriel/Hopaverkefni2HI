var video = document.querySelector('video');
var playpause = document.getElementById('play-pause');
var backbutton = document.getElementById('backbutton');



var backbutton = document.getElementById('backbutton');



// Set up Player Controls

function togglePlayPause() {
  if (video.paused || video.ended) {
  playpause.className = "pause";
  video.play();
  }
  else {
    playpause.className = "play";

  video.pause();
  }
}

playpause.onclick = function() {
  alert("play!!");
};
