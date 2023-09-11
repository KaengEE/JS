//요소 El
//메시지, 시크릿숫자, 점수, 숫자입력, 버튼
const messageEl = document.querySelector(".message");
const numberEl = document.querySelector(".number");
const scoreEl = document.querySelector(".score");
const guessEl = document.querySelector(".guess");
const btn = document.querySelector("button.check");
const body = document.querySelector("body");
const againBtn = document.querySelector("button.again");
const highEL = document.querySelector(".highscore");

let secretNumber = Math.floor(Math.random() * 20 + 1); // 1~20까지 랜덤
numberEl.textContent = "?";
let score = 20; //초기값 20
let highscore = 0; //초기값 0

//초기화 버튼
againBtn.addEventListener("click", function () {
  score = 20;
  secretNumber = Math.floor(Math.random() * 20 + 1); //new랜덤
  messageEl.textContent = "start guessing...";
  scoreEl.textContent = score;
  numberEl.textContent = "?";
  guessEl.value = ""; //입력창 비우기
  body.style.backgroundColor = "#222";
  numberEl.style.width = "15rem";
});

//체크버튼
btn.addEventListener("click", function () {
  let guess = guessEl.value;
  guess = Number(guess); //숫자타입으로 변환

  //입력값이 없을 경우
  if (!guess) {
    messageEl.textContent = "⛔️ No number!";
  } else if (guess === secretNumber) {
    //맞췃을경우
    messageEl.textContent = "🎉 Correct Number!";
    body.style.backgroundColor = "#60b347";
    numberEl.style.width = "30rem";
    numberEl.textContent = secretNumber;
    //최고점수
    if (score > highscore) {
      highscore = score;
      highEL.textContent = score;
    }
  } else {
    //틀렸을경우
    score--;
    if (score < 1) {
      score = 0;
      messageEl.textContent = "💥 You lost the game!";
    } else if (guess > secretNumber) {
      messageEl.textContent = "📈 Too high!";
    } else if (guess < secretNumber) {
      messageEl.textContent = "📉 Too low!";
    }
    scoreEl.textContent = score; //차감된 점수 출력
  }
});
