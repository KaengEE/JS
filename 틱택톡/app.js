//alert("test");
const gameboard = document.querySelector("#gameboard");
const info = document.querySelector("#info");
const startCells = ["", "", "", "", "", "", "", "", ""];

//순서 정하기
let go = "circle";
info.textContent = "Circle 먼저 시작";

function createBoard() {
  startCells.forEach((_, index) => {
    const cellElement = document.createElement("div"); //div 만듬
    cellElement.classList.add("square"); //태그에 클래스 square을 붙임
    cellElement.id = index;
    cellElement.addEventListener("click", addGo); //모든 cell에 클릭이벤트
    gameboard.append(cellElement); //위에서 만든 태그를 게임보드안에 붙임
  });
}

createBoard(); //함수 호출

//함수
function addGo(e) {
  console.log(e.target);
  const goDisplay = document.createElement("div");
  goDisplay.classList.add(go);
  e.target.append(goDisplay); //자식으로 추가
  go = go === "circle" ? "cross" : "circle";
  info.textContent = go + " 턴 입니다.";
  e.target.removeEventListener("click", addGo); //클릭이벤트삭제 똑같은 칸 클릭X
  //승리체크
  checkScore();
}
