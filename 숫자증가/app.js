//counter 클래스가 있는 모든 객체
const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  counter.textContent = "0"; //초기값
  //계속증가하는 함수
  function updateCounter() {
    //문자열 앞에 + 하면 숫자로 봄
    //각각의 data-target을 가져와 숫자로(+) 바꿔서 사용
    const target = +counter.getAttribute("data-target");

    const c = +counter.textContent;

    const increment = target / 300;
    //타켓보다 작으면 반복
    if (c < target) {
      counter.textContent = `${Math.ceil(c + increment)}`; //ceil소수점 버림
      setTimeout(updateCounter, 1);
    } else {
      counter.textContent = target;
    }
  }
  updateCounter();
});
