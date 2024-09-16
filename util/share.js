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
