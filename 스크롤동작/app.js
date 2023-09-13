//모든 박스 boxes 상수에 저장
const boxes = document.querySelectorAll(".box");

//윈도우창에서 스크롤하면 cheackBoxes 함수 실행
window.addEventListener("scroll", checkBoxes);

function checkBoxes() {
  //트리거포인트
  const triggerBottom = (window.innerHeight / 5) * 4;
  boxes.forEach((box) => {
    //박스 상단 높이
    const boxTop = box.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      //박스높이 < 트리거포인트 => show 넣기
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}

checkBoxes(); //처음에 한번 호출
