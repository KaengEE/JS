//변수 생성
// ms 초 분 시간

let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let timerDisplay = document.querySelector(".timerDisplay");
let timer = null; //타이머 실행변수

document.getElementById("startTimer").addEventListener("click", () => {
  //클릭시 타이머 시작
  if (timer !== null) {
    clearInterval(timer); //이미 타이머가 실행중이라면 종료
  }
  timer = setInterval(displayTimer, 10);
});

//멈추기
document.getElementById("pauseTimer").addEventListener("click", () => {
  clearInterval(timer);
});

//리셋하기
document.getElementById("resetTimer").addEventListener("click", () => {
  clearInterval(timer);
  [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
  timerDisplay.innerHTML = "00 : 00 : 00 : 000";
});

//함수
function displayTimer() {
  //10ms에 한번씩 실행하여 10ms 더하기
  milliseconds += 10; //10씩 더함
  if (milliseconds == 1000) {
    milliseconds = 0;
    seconds++;
    if (seconds == 60) {
      seconds = 0;
      minutes++;
      if (minutes == 60) {
        minutes = 0;
        hours++;
      }
    }
  }

  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  let ms =
    milliseconds < 10
      ? "00" + milliseconds
      : milliseconds < 100
      ? "0" + milliseconds
      : milliseconds;

  timerDisplay.innerHTML = `${h} : ${m} : ${s} : ${ms}`;
}
