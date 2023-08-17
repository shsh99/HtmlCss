// 1) 부호를 바꿔 출력한다
// 입력 : -1
// 출력 : 1

// let num = Number(prompt(""));
// alert(num * -1)

// 2) 입력 : -212121212
//    출력: -212121212

// let num1 = Number(prompt(""));
// alert(num1)

// 3) 정수 2개 입력된다. a를 b로 나눈 몫을 출력
// 입력 1(a) : 1
// 입력 2(b) : 3
// 출력 : 0
// 힌트 : parseInt(실수) -> 정수, parseInt(문자열) -> 정수
//        .toFixed() : 소수점 자르기

// let a = Number(prompt(""));
// let b = Number(prompt(""));
// alert(parseInt(a / b))

// 4) 정수 2개 입력된다. a를 b로 나눈 나머지를 출력한다.
// 입력 1(a): 10
// 입력 2(b): 3
// 출력 : 1

// let a = Number(prompt(""));
// let b = Number(prompt(""));
// alert(parseInt(a % b))

// 5) 입력된 정수에 1을 더해 출력한다.
// 입력 : 2147483647
// 출력 : 2147483648

// let num1 = Number(prompt(""));
// alert(num1 +1)

// 6) 정수 2개 입력받아 자동 계산하기
// 첫 줄에 합
// 둘째 줄에 차(빼기),
// 셋째 줄에 곱,
// 넷째 줄에 몫,
// 다섯째 줄에 나머지,
// 입력 1: 10
// 입력 2: 3
// 출력 : 13
//   7
//   30
//   3
//   1

// let num1 = Number(prompt(""));
// let num2 = Number(prompt(""));
// let a = num1 + num2 + "\n";
// let a1 = num1 - num2 + "\n";
// let a2 = num1 * num2 + "\n";
// let a3 = parseInt(num1 / num2) + "\n";
// let a4 = num1 % num2 + "\n";
// alert(a + a1 + a2 + a3 + a4 );

// 7) 정수 3개 입력받아 합과 평균 출력하기
// 입력 1: 1
// 입력 2: 2
// 입력 3: 3
// 출력 : 6
// 공식 : 합 = 모든 숫자 더하기
//      평균 = 모든숫자합/개수

// let num1 = Number(prompt(""));
// let num2 = Number(prompt(""));
// let num3 = Number(prompt(""));
// let num = (num1 + num2 + num3);
// let n = (num / 3);
// alert("합 : " + num + "\n평균 : " + n)

// 8) 정수 1개 입력받아 2배 곱해 출력하기(설명)
// 입력 : 1024
// 출력 : 2048

// let num = Number(prompt(""));
// alert(num * 2)

// 9) 두 정수(a,b) 입력받아 비교하기1(설명)
// a가 b보다 큰 경우 1을, 그렇지 않은 경우 0을 출력한다.
// 입력 1(a): 9
// 입력 2(b): 1

// let num = prompt("");
// let num1 = prompt("");
// if(num > num1) {
//     alert("a가 b보다 크므로" + 1)
// } else {
//     alert("b가 a보다 크므로" + 0)
// }

// 10) // 참 거짓 바꾸기(설명)
// 입력된 값이 0이면 1, 1이면 0을 출력한다.
// (단, 0 또는 1 만 입력된다.)

// let num = prompt("0과 1중에 하나만 입력하세요");
// if(num == 0) {
//     alert(1)
// } else {
//     alert(0)
// }

// 11) 정수 3개 입력받아 가장 작은 수 출력하기(설명)
// 가장 작은 값을 출력한다.
// 입력 1: 3
// 입력 2: -1
// 입력 3: 5
// 출력 : -1
// 힌트 : Math.min(값1, 값2....) : 최소값, Math.max(값1, 값2....) : 최대값

// let num = prompt("");
// let num1 = prompt("");
// let num2 = prompt("");

// a = Math.min(num, num1, num2)
// alert(a)

// 12) 정수 3개 입력받아 짝수만 출력하기(설명)
// 입력 1: 1
// 입력 2: 2
// 입력 3: 4
// 출력 : 2
//        4
// 힌트 : % (나머지 연산자) 이용, 어떤수 % 2 -> 1 (홀수), 어떤수 % 2 -> 0(짝수)
// let num = Number(prompt("숫자1"));  // 1
// let num2 = Number(prompt("숫자2"));  // 2
// let num3 = Number(prompt("숫자3"));  // 4

// 임시 결과 변수
// let result = ""; // 최초 빈문자 초기화

// 조건문 판단 : num
// if(num % 2 === 0) {
// 짝수
// result = result + num + "\n"; // result(문자열) + num(숫자) == 문자열
// }
// 조건문 판단 : num
// if(num2 % 2 === 0) {
// 짝수
//     result = result + num2 + "\n"; // result(문자열) + num(숫자) == 문자열
// }
// 조건문 판단 : num
// if(num3 % 2 === 0) {
// 짝수
//     result = result + num3 + "\n"; // result(문자열) + num(숫자) == 문자열
// }
// 결과 출력
// alert(result);

// 13) 정수 3개 입력받아 짝/홀 출력하기(설명)
// odd(홀수), even(짝수)
// 입력 1: 1
// 입력 2: 2
// 입력 3: 8
// 출력 : odd
//       even
//       even
// let num = Number(prompt("숫자1"));  // 1
// let num2 = Number(prompt("숫자2"));  // 2
// let num3 = Number(prompt("숫자3"));  // 8

// 임시 결과 변수
// let result = ""; // 최초 빈문자 초기화

// 조건문 : num 
// if( num % 2 === 0 ) {
    // 짝수 
    // TODO: 3) 문자열 붙이기
//     result = result + "even" + "\n";
// } else {
    // 홀수
//     result = result + "odd" + "\n";
// }


// 조건문 : num2 
// if( num2 % 2 === 0 ) {
    // 짝수 
    // TODO: 3) 문자열 붙이기
//     result = result + "even" + "\n";
// } else {
    // 홀수
//     result = result + "odd" + "\n";
// }


// 조건문 : num3 
// if( num3 % 2 === 0 ) {
    // 짝수 
    // TODO: 3) 문자열 붙이기
//     result = result + "even" + "\n";
// } else {
//     // 홀수
//     result = result + "odd" + "\n";
// }
// 결과 출력
// alert(result);

// 14) 점수(정수, 0 ~ 100)를 입력받아 평가를 출력해보자.
// 평가 기준
// 점수 범위 : 평가
//  90 ~ 100 : A
//  70 ~   89 : B
//  40 ~   69 : C
//    0 ~   39 : D
// 로 평가되어야 한다.
// 입력 : 73
// 출력 : B

// let num = Number(prompt("숫자"));
// if(num >= 90) {
//     alert("A")
// } else if(num >= 70) {
//     alert("B")
// } else if(num >= 40) {
//     alert("C")
// } else {
//     alert("D")
// }

// TODO 답지
// 조건문 : 논리곱 사용하는 조건문
// if( num >= 90 && num < 100) {
//     alert("A");
// } else if( num >= 70 && num < 90) {
//     alert("B");
// } else if( num >= 40 && num < 70) {
//     alert("C");
// } else if( num >= 0 && num < 40) {
//     alert("D");
// }
// TODO 2번째
// let result = ""; // 최초 빈문자

// for (let i = 0; i < 3; i++) {
//   let num = Number(prompt("정수1"));
//   if (num % 2 == 0) {
     // 짝수
//     result = result + num + "\n"; // 문자열 누적합 형태
//   }
// }

// 최종 result 출력 (짝수만 들어가 있음)
// alert(result);

// 15) 평가 출력
// 평가 : 내용
// A : best!!!
// B : good!!
// C : run!
// D : slowly~
// 나머지 문자들 : what?
// 입력 : A
// 출력 : best!!! 
// let a = "best!!!";
// let b = "good!!";
// let c = "run!";
// let d = "slowly~";

// let num = Number(prompt("숫자"));
// if(num === a) {
//     alert(a);
// } else if(num === b) {
//     alert(b);
// } else if(num === c) {
//     alert(c);
// } else if(num === d) {
//     alert(d);
// } else {
//     alert("what?");
// }
// TODO 답지
// let strChar = prompt("문자"); // A

// 조건문
// if(strChar === "A") {
//     alert("best!!!");
// } else if(strChar === "B") {
//     alert("good!!");
// }else if(strChar === "C") {
//     alert("run!");
// }else if(strChar === "D") {
//     alert("slowly~");
// } else {
//     alert("what?");
// }

// 16) 정수 판별
// 양수이면 "양수", 음수이면 "음수", 0이면 0을 출력하시오.
// 힌트 : 입력값 > 0 (양수)
// 입력 : 5
// 출력 : 양수
// let num = Number(prompt("숫자1")); // 5

// 조건문
// if( num > 0 ) {
//     alert("양수");
// } else if(num < 0) {
//     alert("음수");
// } else {
//     alert("0");
// }



// 17) 비만도 측정 0
// BMI 수치   비만 판정
// ~10 이하   정상
// 11~20 이하   과체중
// 20 초과   비만
// 비만도를 입력받아서 위의 문자열로 출력하세요
// 입력 : 15 
// 출력 : 과체중

// let num = Number(prompt("숫자1")); // 15

// 조건문
// if(num <= 10) {
//     alert("정상");
// } else if( num >= 11 && num <= 20 ) {
//     alert("과체중");
// } else {
//     alert("비만");
// }