// 연습문제
// h1 태그 1개만 선택해서 아래와 같이 변경하세요
// style.color = "orange"
// style.background = "red"
// innerHTML = "From JavaScript"

// window(생략) - document - html ...(dom 트리)
// let header = document.querySelector("h1"); // h1 태그 선택

// 디자인 조작 : h1 태그 , 속성(style)
// header.style.color = "orange";
// header.style.background = "red";
// 문자열 조작 : h1 태그 사이의 문자열 변경(innerHTML(Header))
// header.innerHTML = "From JavaScript";

// 2) h1 태그 모두 선택해서 아래와 같이 조작하세요
// style.color = "orange"
// style.background = "red"
// innerHTML = "From JavaScript"
// 힌트) querySelectorAll(css선택자) => 배열
// css (있는 html 태그에만 디자인 적용)
// js  (없는 것을 다른 것으로 조작할때 주로 사용)
// let headers = document.querySelectorAll("h1"); // h1 여러개 선택

// 반복문 실행 : headers(배열) h1 태그 3개 있음
//           headers[0] = h1 태그, headers[1] = h1 태그,headers[2] = h1 태그
// for(let i=0; i< headers.length; i++) {
//     디자인 적용
//     headers[i].style.color = "orange";
//     headers[i].style.background = "red";
//     문자열 변경 : Header -> From JavaScript
//     headers[i].innerHTML = "From JavaScript";
// }


