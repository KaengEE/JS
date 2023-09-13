//버튼과 input 객체 상수
const search = document.querySelector(".search");
const btn = document.querySelector(".btn");
const input = document.querySelector(".input");

// 버튼 클릭시 search에 active클래스 토글
btn.addEventListener("click", () => {
  search.classList.toggle("active");
  input.focus(); //입력창에 커서를 넣음
});
