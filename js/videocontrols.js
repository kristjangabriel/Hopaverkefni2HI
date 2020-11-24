var supportsVideo = !!document.createElement('video').canPlayType;
if (supportsVideo) {

var videoContainer = document.getElementById('videoContainer');
var video = document.getElementById('video');
var videoControls = document.getElementById('video-controls');

// Hide the default controls
video.controls = true;

// Display the user defined video controls
videoControls.style.display = 'block';

var playpause = document.getElementById('playpause');
var stop = document.getElementById('stop');
var mute = document.getElementById('mute');
var volinc = document.getElementById('volinc');
var voldec = document.getElementById('voldec');
var progress = document.getElementById('progress');
var progressBar = document.getElementById('progress-bar');
var fullscreen = document.getElementById('fs');

// Set up Player Controls

playpause.addEventListener('click', function(e) {
  if (video.paused || video.ended) video.play();
  else video.pause();
});

stop.addEventListener('click', function(e) {
  video.pause();
  video.currentTime = 0;
  progress.value = 0;
});

mute.addEventListener('click', function(e) {
  video.muted = !video.muted;
});

// Buttons for Volume
volinc.addEventListener('click', function(e) {
  alterVolume('+');
});
voldec.addEventListener('click', function(e) {
  alterVolume('-');
});


// Volume
var alterVolume = function(dir) {
  var currentVolume = Math.floor(video.volume * 10) / 10;
  if (dir === '+') {
     if (currentVolume < 1) video.volume += 0.1;
  }
  else if (dir === '-') {
     if (currentVolume > 0) video.volume -= 0.1;
  }
}

// Progress bar for Video
video.addEventListener('loadedmetadata', function() {
  progress.setAttribute('max', video.duration);
});

// Updates the Progress bar
video.addEventListener('timeupdate', function() {
  progress.value = video.currentTime;
  progressBar.style.width = Math.floor((video.currentTime / video.duration) * 100) + '%';
});

}
