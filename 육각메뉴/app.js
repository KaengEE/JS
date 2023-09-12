//alert("test");
let show = true;
const container = document.querySelector(".container");
const menu = document.getElementById("menu");
const add = document.getElementById("add");
const items = document.querySelectorAll(".item");
const numbers = ["one", "two", "three", "four", "five", "six"];

//육각상자가 container
container.addEventListener("click", function () {
  if (show) {
    //클릭시 show가 true라면
    add.style.transform = "rotate(45deg)"; //45도 회전
    menu.style.transform = "scale(1)";

    //각각의 아이템 show
    // items.forEach(function (item, i) {
    //   item.classList.add(numbers[i]);
    // });

    //for반복문 사용시 인덱스번호 넣어줘야함
    for (let i = 0; i < items.length; i++) {
      items[i].classList.add(numbers[i]);
    }
  }
  //되돌리기
  else {
    add.style.transform = "rotate(0deg)";
    menu.style.transform = "scale(0.9)";
    //아이템 다시 넣기
    for (let i = 0; i < items.length; i++) {
      items[i].classList.remove(numbers[i]);
    }
  }
  //번갈아가면서 열렸다 닫혔다
  show = !show;
});
