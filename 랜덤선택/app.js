//태그들의 부모태그
const tagsEl = document.getElementById("tags");
//글자입력창
const textarea = document.getElementById("textarea");

textarea.focus(); //입력할 수 있게 커서를 이동

textarea.addEventListener("keyup", (e) => {
  createTags(e.target.value);
  //키 값이 엔터와 같을때(엔터입력시)
  if (e.key === "Enter") {
    setTimeout(() => {
      e.target.value = ""; //클리어
    }, 10); //0.1초에 한번 실행

    randomSelect(); //랜덤 선택
  }
});

//랜덤함수
function randomSelect() {
  const times = 30;

  const interval = setInterval(() => {
    const randomTag = 랜덤태그();

    if (randomTag !== undefined) {
      하이라이트(randomTag);

      setTimeout(() => {
        하이라이트제거(randomTag);
      }, 100);
    }
  }, 100);

  //중지하고 마지막 선택
  setTimeout(() => {
    clearInterval(interval); //중지

    //마지막선택 하이라이트
    setTimeout(() => {
      const randomTag = 랜덤태그();
      하이라이트(randomTag);
    }, 100);
  }, times * 100); //3초 뒤에 제거
}

function 랜덤태그() {
  const tags = document.querySelectorAll(".tag");
  return tags[Math.floor(Math.random() * tags.length)];
}

function 하이라이트(tag) {
  tag.classList.add("highlight");
}

function 하이라이트제거(tag) {
  tag.classList.remove("highlight");
}

//입력된 문자열 태그로 분리
function createTags(input) {
  const tags = input
    .split(",")
    .filter((tag) => tag.trim() !== "") //공백은 배열에 안들어감
    .map((tag) => tag.trim()); //태그의 공백을 없앤 후 대체
  console.log(tags);

  tagsEl.innerHTML = ""; //태그 전부 비우기
  //각각의 태그로 만들기 forEach:배열은 e가 대문자
  tags.forEach((tag) => {
    const tagEl = document.createElement("span"); //스판태그 생성
    tagEl.classList.add("tag"); //클래스 tag 입력
    tagEl.textContent = tag; //태그이름에 값입력
    tagsEl.appendChild(tagEl); //부모태그에 자식태그로 붙이기
  });
}
