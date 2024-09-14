let isPlaying = true; // 시작 시 바로 재생 상태로 설정

function controlBgm(event) {
  event.stopPropagation();
  const iconElement = document.querySelector(".icon");
  const bgm = document.getElementById("audio-bgm");

  // 음악이 재생 중인지를 확인하여 아이콘 상태 변경
  if (bgm.paused) {
    // 음악이 일시정지 상태일 때 play 아이콘 표시
    iconElement.classList.remove("fa-pause");
    iconElement.classList.add("fa-play");
  } else {
    // 음악이 재생 중일 때 pause 아이콘 표시
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
