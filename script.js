const songs = [
  "songs/Bijlee Bijlee(PagalWorld.com.cm).mp3",
  "songs/Kali-Kali-Zulfon-Ke(PaglaSongs).mp3",
  "songs/Ram Siya Ram(PagalWorld.com.cm).mp3"
];

const images = [
  "photos/img11.jpg",
  "photos/img12.jpg",
  "photos/img13.jpg"
];

const names = [
  "Bijlee Bijlee",
  "Kali Kali Zulfon Ke",
  "Ram Siya Ram"
];

window.addEventListener("DOMContentLoaded", () => {
  const audio = document.querySelector("audio");
  const image = document.getElementById("cover");
  const nam = document.getElementById("title");
  const nextBtn = document.getElementById("nextBtn");
  const prevBtn = document.getElementById("prevBtn");

  let index = 0;

  function updatePlayer() {
    audio.src = songs[index];
    image.src = images[index];
    nam.textContent = names[index];
    audio.play();
  }

  function next() {
    index = (index + 1) % songs.length;
    updatePlayer();
  }

  function prev() {
    index = (index - 1 + songs.length) % songs.length;
    updatePlayer();
  }

  nextBtn.addEventListener("click", next);
  prevBtn.addEventListener("click", prev);

  updatePlayer();
});
