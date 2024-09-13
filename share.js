// 웹 페이지를 공유하는 함수예요.
// 이 함수는 Web Share API를 사용하고 있는데, 만약 사용자의 브라우저가 Web Share API를 지원하지 않는 경우, 경고 창을 통해 사용자에게 알립니다.
function shareMessage() {
  if (navigator.share) {
    try {
      const shareData = {
        title: "Web Share Example",
        text: "Check out this web share example!",
        url: window.location.href,
      };

      navigator
        .share(shareData)
        .then(() => console.log("공유 성공!"))
        .catch((error) => console.error("공유 실패:", error.message));
    } catch (error) {
      console.error("공유 실패:", error.message);
    }
  } else {
    alert("해당 브라우저에서 Web Share API가 동작하지 않습니다.");
  }
}
