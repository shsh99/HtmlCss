// TODO 반복문과 함께 사용하는 예약어
// 1) break : 중단 예약어
// 예제) 1부터 5까지 반복해서 3이 될 때 중단하고 빠져나오는 코드 작성
// for(초기값;조건식;증감식){} : 조건식 참일때만 반복함
// for(let i=1; i<=5; i++) {
//      결과 출력
//     console.log("i의 값은 " + i); // i값 출력
//      i === 3 일때 중단
//     if(i === 3) {
//         break;  // 반복문 강제 중단
//     }
// } 

// 2) continue : 계속 이라는 예약어
// 예제 2) 1 ~ 5까지 출력하되 3은 제외하고 출력하기
// for(let i=1; i<=5; i++) {

//     i === 3 이면 통과 : 아래 라인을 실행안함
//     if( i === 3 ) {
//         1) 밑에 console.log 라인이 실행안됨
//         2) 바로 반복문 첫 라인으로 올라감
//         continue; 
//     }

//     console.log("i의 값은 " + i); // 결과 i 출력
// }

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


