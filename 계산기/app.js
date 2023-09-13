//alert("test");
const screenDisplay = document.querySelector(".screen");
const buttons = document.querySelectorAll("button");

let calculation = []; //배열
let acc; //변수 acc

//화살표 함수
buttons.forEach((button) => {
  button.addEventListener("click", () => calculate(button));
});

function calculate(button) {
  // console.log(button);
  const value = button.textContent; //버튼의 글자
  if (value === "CLEAR") {
    calculation = []; //초기화
    screenDisplay.textContent = ".";
  } else if (value === "=") {
    //계산
    screenDisplay.textContent = eval(acc);
  } else {
    //숫자와 연산자를 넣는다
    calculation.push(value); //한자한자 배열에 넣음
    acc = calculation.join(""); //문자열로만듬
    screenDisplay.textContent = acc;
  }
  console.log(acc);
}
