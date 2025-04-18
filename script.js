const bar = document.getElementById("bar");
const dot = document.getElementById("dot");
const end = document.getElementById("end");

const playButton = document.getElementById("play");
const rewindButton = document.getElementById("rewind");
const ffButton = document.getElementById("fforward");

const trackTitle = document.getElementById("title");
const trackArtist = document.getElementById("artist");
const trackAlbum = document.getElementById("album");

const albumArt = document.getElementById("album-art")

let isPlaying = false;
let artist = 'TheStrokes'
let album = 'TheNewAbnormal'
let title = 'TheAdultsAreTalking'

const audio = new Audio(`./music/${artist}/${album}/${title}.mp3`);

const playHandler = async () => {
  if (!isPlaying) {
    isPlaying = true
    trackTitle.innerHTML = title;
    trackArtist.innerHTML = artist;
    trackAlbum.innerHTML = album;
    albumArt.setAttribute('src', `./images/${album}.png`);
    // end.innerHTML = track.length;

    audio.play()
    .then(() => {
        console.log('Audio is playing');
    })
    .catch((error) => {
        console.error('Error playing audio:', error);
    });
    playButton.innerHTML = 'pause'
  } else {
    audio.pause();
    isPlaying = false;
    playButton.innerHTML = 'play';
  }
};

playButton.addEventListener('click', playHandler)

const rewindHandler = () => {
    if (dot.location > '0:00') {
        
    } 
}

const ffHandler = () => {}


