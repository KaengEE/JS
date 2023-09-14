//alert("TEST");
const insert = document.getElementById("insert");

//키입력시 이벤트 발생 - 이벤트 객체 e 생성
window.addEventListener("keydown", (e) => {
  console.log(e);
  insert.innerHTML = `
  <div class="key">
  ${e.key === " " ? "space" : e.key}
  <small>event.key</small>
  </div>

  <div class="key">
  ${e.keyCode}
  <small>event.keyCode</small>
  </div>

  <div class="key">
  ${e.code}
  <small>event.code</small>
  </div>`;
});
