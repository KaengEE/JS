//alert("test");

const addForm = document.querySelector(".add"); //할일 추가 폼
const list = document.querySelector(".todos"); //ul 리스트

addForm.addEventListener("submit", function (e) {
  e.preventDefault(); //이벤트중지
  const todo = addForm.add.value.trim(); //입력내용 공백 삭제
  addTodoHtml(todo);
  addForm.add.value = ""; //입력창 clear
});

function addTodoHtml(todo) {
  const html = `<li class="list-group-item d-flex justify-content-between align-items-center">
  <span>${todo}</span>
  <i class="far fa-trash-alt delete"></i>
</li>`;
  list.innerHTML += html; //ul 안에 추가
}

//휴지통 버튼 누르면 삭제
list.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete")) {
    //li태그전체를 삭제해야함
    e.target.parentElement.remove();
  }
});
