// 02_exam/index_es6.js
// TODO: 아래 지시사항대로 코딩하고, 함수를 가져와서 출력하세요
// 변수 val 의 문자열 길이가 홀수이면 ending() 함수를 실행하세요
// 입력 : x
// 사용법 : import 함수명 from "경로/js파일명";
// TODO: import 하세요
import ending from "./var_es6.js";

let val = "greetings"; // 길이 : 9

// TODO: val 의 문자열 길이가 홀수 인지 판단하여 홀수이면 ending() 실행하세요
// 힌트 : 문자열.length (문자열 길이)
if (val.length % 2 === 1) {
  ending(); // 함수 실행(호출, 사용)
}
