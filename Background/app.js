//사용할 태그들을 선택!
const h3 = document.querySelector("h3"); //h3선택
const color1 = document.querySelector(".color1"); //첫번째입력
const color2 = document.querySelector(".color2"); //두번째입력
const body = document.querySelector("body"); //body선택

//이벤트 사용!
color1.addEventListener("change", colorChange);
color2.addEventListener("change", colorChange);

function colorChange() {
  //background: linear-gradient(to right, green, red);
  // `` 는 변수를 바로 넣을 수 있음
  body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
  h3.innerText = body.style.background;
}
