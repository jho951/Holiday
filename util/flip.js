let isFlipped = { status: false, num: 0 };

function flipImage() {
  const audio = document.getElementById("audio-bgm");
  const iconElement = document.querySelector(".icon");
  const play = document.getElementById("btn-container");
  const postcardElement = document.getElementById("postcard");

  // 회전 상태에 따라 클래스 추가/제거
  if (isFlipped.status) {
    postcardElement.classList.remove("rotate-180");
    postcardElement.classList.add("rotate-0");
    play.style.right = "10%";
    play.style.transform = "rotate(0)";
    iconElement.style.opacity = "0";
    setTimeout(() => {
      iconElement.style.color = "#ffffff";
      iconElement.style.opacity = "1";
    }, 300);
  } else {
    // 상태가 false일 때
    postcardElement.classList.add("rotate-180");
    postcardElement.classList.remove("rotate-0");
    play.style.right = "85%";
    play.style.transform = "rotate(180deg)";
    iconElement.style.opacity = "0";
    setTimeout(() => {
      iconElement.style.color = "black";
      iconElement.style.opacity = "1";
    }, 300);
  }
  // 상태 반전
  isFlipped.status = !isFlipped.status;
  isFlipped.num++;
  if (isFlipped.num === 1) {
    audio.play();
    iconElement.classList.remove("fa-play");
    iconElement.classList.add("fa-pause");
  }
}

//   // 애니메이션 종료 후 최종 상태 설정
//   postcardElement.addEventListener(
//     "transitionend",
//     () => {
//       if (isFlipped.status) {
//         postcardElement.classList.remove("rotate-180");
//         postcardElement.classList.add("rotate-180");
//       } else {
//         postcardElement.classList.remove("rotate-180", "rotate-180");
//         postcardElement.classList.add("rotate-0");
//       }
//     },
//     { once: true }
//   ); // 한 번만 실행되도록 설정
