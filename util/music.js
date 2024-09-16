let isPlaying = true;

function controlBgm(event) {
  event.stopPropagation();
  const iconElement = document.querySelector(".icon");
  const bgm = document.getElementById("audio-bgm");

  if (bgm.paused) {
    iconElement.classList.remove("fa-pause");
    iconElement.classList.add("fa-play");
  } else {
    iconElement.classList.remove("fa-play");
    iconElement.classList.add("fa-pause");
  }

  if (isPlaying) {
    bgm.pause();
    iconElement.classList.remove("fa-pause");
    iconElement.classList.add("fa-play");
  } else {
    bgm.play();
    iconElement.classList.remove("fa-play");
    iconElement.classList.add("fa-pause");
  }

  isPlaying = !isPlaying;
}
