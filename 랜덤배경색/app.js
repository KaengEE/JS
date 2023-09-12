//alert("test");

const body = document.querySelector("body");
const btn = document.querySelector("button");

//버튼에 이벤트 달기(함수가 없을경우)
btn.addEventListener("click", function () {
  document.body.style.backgroundColor = `rgb(${Math.round(
    Math.random() * 255
  )}, ${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)})`;
});

//버튼에 이벤트 달기(함수가 있을경우)
//btn.addEventListener("click",changcolor);

// 함수
// function changeColor() {
//   document.body.style.backgroundColor = `rgb(${Math.round(
//     Math.random() * 255
//   )}, ${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)})`;
// }
