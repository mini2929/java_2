console.log("test");
//크롬 브라우저에서 f12 (개발자도구)
/*
  DOM (Document Object Model) 문서 객체 모델
*/

// 단수의 html요소 선택 시
const el = document.querySelector("h1");
console.log(el);

const el1 = document.querySelector("h1");
console.log(el1);

const el2 = document.querySelector('li');
console.log(el2);

// 변수 겹치면 error남
// 세미콜론은 안적어도 구동은 되는 엔진이지만 가독성과 명확성을 위해 사용하는 것이 좋음

// 특정 부모요소 안쪽의 자식 요소 탐색
const title = document.querySelector(".title a")
console.log(title);

// 복수개 요소 탐색하는 방법
const lis = document.querySelectorAll("ul li");
console.log(lis)

// 배열 형태로 반환된 복수개의 html 요소 하나씩 선택
for (let i = 0; i < 4; i++) {
  console.log(lis[i])
}

// for 루프 : 특정 작업 반복 for (초기화; 조건; 증감)
// let i = 0 : 루프의 시작 부분 변수 초기화 i는 인덱스
// 

for (let i=1; i < 4; i++){
  console.log(lis[i])
}
// list 2부터 3개만 선택되네?