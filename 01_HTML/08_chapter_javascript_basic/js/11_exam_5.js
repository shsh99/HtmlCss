// 조건문 연습 예제

/* 조건문 연습 */
// 1) 입력값이 y이면 글쓰기 라고 출력하고
//  y 가 아니면 글수정이라고 출력하기
// 힌트 : 조건문
// 새로운 출력방법(3) : 
// 값 이 웹브라우저에 출력됨
// console.log(값) 대신에 아래 코드를 사용하면 화면에 출력됨
// document.querySelector("#output").innerHTML = "값";
// let char = prompt("");
// let result = "";

// if(char === "y") {
//     result = "글쓰기";  
// } else {
//     result = "글수정";
// }
// document.querySelector("#output").innerHTML = result;

// 2) // 입력값이 짝수이면 짝수입니다.
// 홀수이면 홀수입니다. 출력하는 코딩을 작성하세요.
// 입력 : 0
// 출력 : 짝수입니다.
//  단, 출력은 웹브라우저에 하세요

// let result = "";
// let num = Number(prompt(""));
// if(num %2 === 0) {
//     result = "짝수입니다."
// } else {
//     result = "홀수입니다." 
// }
// document.querySelector("#output").innerHTML = result;

// 3) // 입력값이 3~5가 들어오면 봄입니다.
//          6~8 들어오면 여름입니다.
//          9~11 들어오면 가을입니다.
//          12~2 들어오면 겨울입니다.

// let num = Number(prompt(""));
// let result = "";

// if (num >= 3 && num <= 5) {
//     result = "봄입니다."
// } else if (num >= 6 && num <= 8) {
//     result = "여름입니다."
// } else if (num >= 9 && num <= 11) {
//     result = "가을입니다."
// } else {
//     result = "겨울입니다."
// }
// document.querySelector("#output").innerHTML = result;

// 4) // 입력을 하나 받아서 "admin" 이 맞으면 
//   "해당 콘텐츠 이용이 가능합니다." 라고 출력
// 아니면 
//   다시 입력값을 숫자로 하나 또 받아서
//   입력값이 1 ~ 7 사이에 있으면 
//   "해당 콘텐츠 이용이 가능합니다." 라고 출력하고,
//   아니면 "해당 콘텐츠에 접근할 수 없습니다."
// 힌트 : 중첩 if문 사용(if문 안에 if문 있는 구조)
// TODO 답
// 구조 :
//  입력값(prompt)
//  if(조건식) {
//     실행문1
//  } else {
//     입력값2(prompt)
//     if(조건식) {
//         실행문2
//     } else {
//         실행문3
//     }
//  }
// 입력값
// let userId = prompt("아이디를 입력하세요"); // admin

// if (userId === "admin") {
//   document.querySelector("#output").innerHTML = "해당 콘텐츠 이용이 가능합니다.";
// } else {
//   // 입력값2
//   let num = Number(prompt("숫자를 입력하세요")); // 1 ~ 7
// //   또 조건문
//     if(num >=1 && num <= 7) {
//         document.querySelector("#output").innerHTML = "해당 콘텐츠 이용이 가능합니다.";
//     } else {
//         document.querySelector("#output").innerHTML = "해당 콘텐츠에 접근할수 없습니다.";
//     }
// }

// let char = (prompt(""));
// let result1 = "";

// if(char === "admin") {
//     result1 = "해당 콘텐츠 이용이 가능합니다."

// } else {
//     let num = Number(prompt(""));
//     if(num >= 1 && num <= 7) {
//         result1 = "해당 콘텐츠 이용이 가능합니다."
//     } else {
//         result1 = "해당 콘텐츠에 접근할 수 없습니다."
//     }
// }
// document.querySelector("#output").innerHTML = result1;

// 5) // X 가 1일 경우 "x의 값은 1입니다."
// X 가 2일 경우 "x의 값은 2입니다."
// X 가 1도2 도 아닐경우 "x의 값은 1 또는 2가 아닙니다."
// 입력 : 2
// 출력 : x의 값은 2입니다.

let num = Number(prompt("숫자를 입력하세요"));
let result = "";
if(num === 1) {
    result = "x의 값은 1입니다."
} else if (num === 2) {
    result = "x의 값은 2입니다."
} else {
    result = "x의 값은 1또는 2가 아닙니다."
}
document.querySelector("#output").innerHTML = result;













