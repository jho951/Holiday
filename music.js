let isPlaying = false;

function controlBgm() {
  const bgmElement = document.querySelector(".btn-bgm");
  const bgm = document.getElementById("audio-bgm");

  if (isPlaying) {
    bgm.pause();
    bgmElement.innerText = "재생";
  } else {
    bgm.play();
    bgmElement.innerText = "일시중지";
  }

  isPlaying = !isPlaying;
}
