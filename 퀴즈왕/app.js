//alert("test");
//상수선언
const 정답 = ["A", "A", "A", "A"];
const form = document.querySelector(".quiz-form");
const result = document.querySelector(".result");

//제출버튼 누르면 submit이벤트
form.addEventListener("submit", function (e) {
  e.preventDefault(); //전송을 막음
  let score = 0; //점수변수
  const 답변 = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];
  //문제당 25점
  for (let i = 0; i < 답변.length; i++) {
    if (답변[i] === 정답[i]) {
      score += 25;
    }
  }
  scrollTo(0, 0); //제일 위로 스크롤 올림
  result.classList.remove("d-none"); //안보이게하는 d-none삭제

  let output = 0;
  //setInterval 주기적으로 실행
  const timer = setInterval(function () {
    result.querySelector("span").textContent = `${output}%`;
    if (output === score) {
      clearInterval(timer); //실행멈춤
    } else {
      output++;
    }
  }, 10);
});
