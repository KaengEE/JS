//선택요소
const smallCups = document.querySelectorAll(".cup-small");
const liters = document.getElementById("liters");
const percentage = document.getElementById("percentage");
const remained = document.getElementById("remained");

smallCups.forEach((cup, idx) => {
  cup.addEventListener("click", () => 작은컵물채우기(idx));
});

//작은컵물채우기
function 작은컵물채우기(idx) {
  //인덱스번호가 7이거나 클래스full이 있으면 idx--
  if (idx === 7 && smallCups[idx].classList.contains("full")) idx--;
  else if (
    smallCups[idx].classList.contains("full") &&
    !smallCups[idx].nextElementSibling.classList.contains("full")
  ) {
    idx--;
  }

  //반복문으로 인덱스번호이하는 전부 full클래스
  smallCups.forEach((cup, idx2) => {
    if (idx2 <= idx) {
      cup.classList.add("full");
    } else {
      cup.classList.remove("full");
    }
  });

  큰물컵채우기();

  //큰물컵채우기
  function 큰물컵채우기() {
    //작은컵의 full 클래스를 개수를 셈
    //현재 물이 채워져 있는 작은컵의 개수
    const fullCups = document.querySelectorAll(".cup-small.full").length;
    const totalCups = smallCups.length; //작은 컵의 개수

    if (fullCups === 0) {
      //풀컵이 0개
      percentage.style.visibility = "hidden";
      percentage.style.height = 0;
    } else {
      //풀컵이 있으면
      percentage.style.visibility = "visible";
      percentage.style.height = `${(fullCups / totalCups) * 330}px`; //물 높이
      percentage.innerText = `${(fullCups / totalCups) * 100}%`; //풀컵/전체컵 *100 (백분율)
    }

    if (fullCups === totalCups) {
      remained.style.visibility = "hidden";
      remained.style.height = 0;
    } else {
      remained.style.visibility = "visible";
      liters.innerText = `${2 - (250 * fullCups) / 1000}L`;
    }
  }
}
