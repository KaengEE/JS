//클래스 faq-toggle 버튼들을 모두 저장
const toggles = document.querySelectorAll(".faq-toggle");

//클릭시 상위객체 (.parentNode) 를 찾아서 active 클래스를 토글
toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    toggle.parentNode.classList.toggle("active");
  });
});
