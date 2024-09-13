let isFlipped = false;

function flipImage() {
  const postcardElement = document.getElementById("postcard");

  // 회전 상태에 따라 클래스 추가/제거
  if (isFlipped) {
    postcardElement.classList.remove("rotate-180");
    postcardElement.classList.add("rotate-0");
  } else {
    postcardElement.classList.add("rotate-180");
    postcardElement.classList.remove("rotate-0");
  }

  // 상태 반전
  isFlipped = !isFlipped;

  // 애니메이션 종료 후 최종 상태 설정
  postcardElement.addEventListener(
    "transitionend",
    () => {
      if (isFlipped) {
        postcardElement.classList.remove("rotate-180");
        postcardElement.classList.add("rotate-180");
      } else {
        postcardElement.classList.remove("rotate-180", "rotate-180");
        postcardElement.classList.add("rotate-0");
      }
    },
    { once: true }
  ); // 한 번만 실행되도록 설정
}
