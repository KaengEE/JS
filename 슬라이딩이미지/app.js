//클래스 panel들을 모두 선택해 상수 panels에 담기
const panels = document.querySelectorAll(".panel");

//반복문을 사용해서 모든 패널에 클릭이벤트 달고 클릭시 active클래스 추가
// for (let i = 0; i < panels.length; i++) {
//   panels[i].addEventListener("click", function () {
//     panels[i].classList.add("active");
//   });
// }

panels.forEach(function (panel) {
  panel.addEventListener("click", function () {
    removeActives();
    panel.classList.add("active");
  });
});

//모든 패널의 active클래스 제거
function removeActives() {
  panels.forEach(function (panel) {
    panel.classList.remove("active");
  });
}
