//alert("테스트");
//여러개의 버튼을 선택, 이때 배열로 리턴됨
const btns = document.querySelectorAll("button"); //버튼태그선택

//키보드 이벤트
document.addEventListener("keydown", function (e) {
  const key = e.key;
  drumsound(key);
  animationDrum(key);
});

//모든 버튼에 이벤트 작성
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function (e) {
    const key = e.target.innerText;
    drumsound(key);
    animationDrum(key);
  });
}

//애니메이션함수
function animationDrum(key) {
  const btn = document.querySelector(`.${key}`);
  btn.classList.add("pressed");
  //0.2초 뒤에 삭제
  setTimeout(function () {
    btn.classList.remove("pressed");
  }, 200);
}

//함수
function drumsound(key) {
  if (key == "w") {
    const audio = new Audio("sounds/tom-1.mp3");
    audio.play();
  } else if (key == "a") {
    const audio = new Audio("sounds/tom-2.mp3");
    audio.play();
  } else if (key == "s") {
    const audio = new Audio("sounds/tom-3.mp3");
    audio.play();
  } else if (key == "d") {
    const audio = new Audio("sounds/tom-4.mp3");
    audio.play();
  } else if (key == "j") {
    const audio = new Audio("sounds/snare.mp3");
    audio.play();
  } else if (key == "k") {
    const audio = new Audio("sounds/crash.mp3");
    audio.play();
  } else if (key == "l") {
    const audio = new Audio("sounds/kick-bass.mp3");
    audio.play();
  }
}
