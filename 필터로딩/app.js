// %표시 글자 , 벡그라운드 객체 상수로 저장
const loadText = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");

let load = 0; //초기값 0
let int = setInterval(blurring, 30); //0.03초에 한번씩 blurring 실행

function blurring() {
  load++;
  // console.log(load);
  if (load > 99) {
    //load숫자가 100이상이면 실행 중지
    clearInterval(int);
  }

  loadText.textContent = `${load}%`;
  loadText.style.opacity = scale(load, 0, 100, 1, 0); //(0~100) => (1,0)
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

//scale 함수
function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}
