const messages = [
  `즐거운 추석 명절 보내시고,\n 평안하고 행복한 시간 되시길 바랍니다`,
];

let isAnimating = false; // 애니메이션 진행 상태 변수
let hasTypedMessage = false; // 메시지가 이미 적혔는지 추적하는 변수

let isFlipped = false;
let isFlippedBefore = 0;

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

function flipImage() {
  const audio = document.getElementById("audio-bgm");
  const iconElement = document.querySelector(".icon");
  const play = document.getElementById("btn-container");
  const postcardElement = document.getElementById("postcard");
  const nameElement = document.querySelector(".p-name");

  // 초기에는 아이콘 없음
  if (isFlippedBefore === 0) {
    iconElement.style.opacity = "1";
  }

  if (isFlipped) {
    // 상태가 true일 때 (카드가 앞면으로 돌아갈 때)
    postcardElement.classList.remove("rotate-180");
    postcardElement.classList.add("rotate-0");
    play.style.right = "5%";
    play.style.transform = "rotate(0)";
    iconElement.style.opacity = "0";
    setTimeout(() => {
      iconElement.style.color = "#ffffff";
      iconElement.style.opacity = "1";
    }, 300);
  } else {
    // 상태가 false일 때 (카드가 뒷면으로 회전할 때)
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
  isFlipped = !isFlipped;
  isFlippedBefore++;
  console.log(isFlippedBefore);

  if (isFlippedBefore === 1) {
    audio.play();
    iconElement.classList.remove("fa-play");
    iconElement.classList.add("fa-pause");
  }

  setTimeout(() => {
    if (isFlipped && isFlippedBefore === 1) {
      toggleVisibility(postcardElement, true);
      typeMessage(() => {
        toggleVisibility(nameElement, true); // 메시지가 적힌 후 이름 표시
      });
    }
  }, 1000);
}
