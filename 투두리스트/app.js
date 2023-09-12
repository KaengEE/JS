//alert("test");

const addForm = document.querySelector("form.add"); //할일 추가 폼
const list = document.querySelector(".todos"); //ul 리스트
const search = document.querySelector("form.search"); //serch 폼

addForm.addEventListener("submit", function (e) {
  e.preventDefault(); //이벤트중지
  const todo = addForm.add.value.trim(); //입력내용 공백 삭제
  addTodoHtml(todo);
  addForm.add.value = ""; //입력창 clear
});

//추가 함수
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

//검색창 이벤트
search.addEventListener("keyup", function (e) {
  const term = search.search.value.trim(); //검색어
  removeFilters();
  if (term) {
    filterTodos(term);
  }
});

//검색어 보여주기
search.addEventListener("submit", function (e) {
  e.preventDefault(); //엔터해도 전송x
});

//검색어로 할일들을 필터링
function filterTodos(term) {
  //할일 태그들을 배열로 만듬
  Array.from(list.children)
    .filter((todo) => !todo.textContent.includes(term))
    .forEach((todo) => todo.classList.add("filtered"));
}

//검색어가 없을때 모두 출력
function removeFilters() {
  Array.from(list.children).forEach((todo) =>
    todo.classList.remove("filtered")
  );
}
