const messages = [
  `즐거운 추석 명절 보내시고,\n 평안하고 행복한 시간 되시길 바랍니다`,
];

let isAnimating = false; // 애니메이션 진행 상태 변수

function getRandomMessage() {
  const randomIndex = Math.floor(Math.random() * messages.length);
  return messages[randomIndex];
}

function toggleVisibility(element, show) {
  element.classList.toggle("hidden", !show);
  element.classList.toggle("opened", show);
}

function typeMessage(callback) {
  if (isAnimating) return; // 애니메이션 중이면 함수를 종료합니다.
  isAnimating = true; // 애니메이션이 시작됨을 표시합니다.

  const randomMessage = getRandomMessage();
  const messageElement = document.querySelector(".p-message");
  messageElement.innerHTML = "";

  let i = 0;

  function typeNextCharacter() {
    if (i < randomMessage.length) {
      messageElement.innerHTML += randomMessage[i];
      i++;
      setTimeout(typeNextCharacter, 100);
    } else {
      isAnimating = false; // 애니메이션이 끝났음을 표시합니다.
      if (callback) {
        callback();
      }
    }
  }

  typeNextCharacter();
}

function renewMessage() {
  if (isAnimating) return; // 애니메이션 중이면 함수를 종료합니다.

  const postcardElement = document.getElementById("postcard");
  const nameElement = document.querySelector(".p-name");

  toggleVisibility(postcardElement, false);
  toggleVisibility(nameElement, false);

  setTimeout(() => {
    typeMessage(() => {
      toggleVisibility(nameElement, true);
    });
    toggleVisibility(postcardElement, true);
  }, 500);
}

window.onload = () => {
  renewMessage();
};
