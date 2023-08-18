//  1) 1 부터 100까지 출력하기
//  for 문 사용
//  for(let i=1; i<=100; i++) {
//      console.log(i);
//  }

//  2) 1 부터 n 까지 출력하기
//  입력예시 : 5
//  출력예시 : 1 2 3 4 5
// let num = Number(prompt("정수1")); // 5
//  문자열 붙이기 변수 
// let result = ""; // 빈문자열

//  반복문
//  for(초기값;초기값변수<=끝값;증감식){}
// for(let i=1; i<=num;i++) {
//     result = result + i + " "; // 문자열 붙이기
// }
//  결과 출력 
// console.log(result);


// 3) a 부터 b 까지 출력

// let num1 = Number(prompt("")); 
// let num2 = Number(prompt("")); 
// for(let i = num1; i <= num2; i++) {
//     console.log(i);
// }

// TODO 답
// 입력값 2개를 비교해서 : 작은값(시작값) , 큰값(끝값)

// let num = Number(prompt("숫자 1개"));  // 8
// let num2 = Number(prompt("숫자 1개")); // 3

// 최대값(Math.max()) , 최소값(Math.min())
// let maxNum = Math.max(num, num2); // 큰값(끝값)
// let minNum = Math.min(num, num2); // 작은값(시작값)

// 문자열 붙이기 변수
// let result = ""; // 빈문자열로 초기화

// for(시작값;시작값<=끝값;증감식){}
// for(let i=minNum; i<=maxNum; i++) {
    // 문자열 붙이기 : 문자열 + 숫자 => 문자열(자동 자료형변환)
    // result = result + i + " ";
// }
// 결과 출력
// alert(result);


// 4) 별 출력하기
// 입력 : 5
// 출력 : *****
// let num = Number(prompt("숫자 1개"));  // 5(끝값)

// 문자열 붙이기 변수
// let result = ""; // 빈문자열 초기화

// for(초기값;초기값<=끝값;증감식){}
// for(let i=0; i<num; i++) {
    // 문자열 붙이기
//     result = result + "*";
// }
// console.log(result);

// 5) 1 ~ 10 까지 합계를 구해서 아래와 같이 화면에 출력해 보세요
// 출력 : "1~10까지의 합계 : 55"

// TODO : 2) 누적합 문제
// 누적합을 위한 임시 변수
// let sumVal = 0; // 0 초기화(최초 변수에 값을 넣어두는 행위)

// 반복문
// for(초기값;초기값<끝값;증감식){}
// for(let i=1; i<=10; i++) {
    // 누적합 
//     sumVal = sumVal + i; // 누적합변수 = 누적합변수 + 카운팅변수
// }

// console.log("1~10의 합계 : " + sumVal);


