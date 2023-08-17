// 반복문 : for문(80% 사용) 
//  왜? 같은 명령문을 반복해서 출력하고 싶을 때 사용
// alert("hello"); 10번 출력
// 사용법 : 초기 값을 조건식에 넣어 판단하여 참이면 반복, 거짓이면 중단

// for(초기값; 조건식; 증감식) {
//    반복문(문장);
// }
// 예제) 안녕하세요를 3번 출력하세요 단, 반복문 사용

// for(let k = 0; k < 3; k++ ) {
//     alert("안녕하세요");   
// }

// TODO : 자주 나오는 코딩 3가지 패턴 = 꼭 기억 할 것
// TODO : 1) 카운팅 : 1씩 증가시키기
// 예제) count 변수가 1부터 10까지 1씩 증가하는 코드를 작성하세요.

// for(let i=1; i<=10; i++) {
    // TODO: 카운팅 : 아래 코드를 완성하세요
    // i =1 일때 1 <= 10 (참) 반복문실행 : count = 0 + 1 (1)
    // i =2 일때 2 <= 10 (참) 반복문실행 : count = 1 + 1 (2)
    // i =3 일때 3 <= 10 (참) 반복문실행 : count = 2 + 1 (3)
    // ...
    // i =10 일때 10 <= 10(참) 반복문실행 : count = 9 + 1 (10)
    // count = count + 1; // 카운팅 코드
    // count++; 오직 1씩만 증가시킨다면 증감연산자 사용
    // count += 1;
// }
// console.log(count);

// TODO 2) 누적합
// 예제) 1 ~ 10 까지 모든 숫자를 더해서 최종 결과를 출력하는 코드를 작성하세요
// let count = 0;
// for(i = 0; i <=10; i++) {
//     count += i;
// }
// alert(count);
// let count = 0;
// let sumVal= 0;
// for(let i = 1; i <= 10; i++) {
//     // 카운팅 코드
//     count = count + 1;
//     // 누적합 코드
//     sumVal = sumVal + count;
//     sumVal += count;
  // i=1 일때 1<=10 (참) , count = 0 + 1(1), sumVal = 0 + 1(1)
    // i=2 일때 2<=10 (참) , count = 1 + 1(2), sumVal = 1 + 2(3)
    // i=3 일때 3<=10 (참), count = 2 + 1(3), sumVal = 3 + 3(6)
    // ...
    // sumVal = 55;

// }
// alert(sumVal);

// TODO 3) 문자열 붙이기
// 예제) *********을 화면에 출력하세요
// let strCount = "";
// for(let i = 1; i <= 5; i++) {  
      // 문자열 붙이기 (카운팅)
     // i=1 일때 1<=5 (참) 반복문실행 strCount = "" + "*"("*")
     // i=2 일때 2<=5 (참) 반복문실행 strCount = "*" + "*"("**")
     // i=3 일대 3<=5 (참) 반복문실행 strCount = "**" + "*"("***")
     // ...
     // strCount = strCount + '*';
//     strCount = strCount + '*';
// }
// console.log(strCount);

// 연습) 아래 결과 처럼 별 출력하기
// 결과 :
// *
// **
// ***
// ****
// *****
// let strCount = ""; // 빈문자열("") 로 초기화

// for(let i=1; i<=5; i++) {
    // 문자열 붙이기 (카운팅)
    // i=1 일때 1<=5 (참) 반복문실행 strCount = "" + "*"("*"), console.log("*")
    // i=2 일때 2<=5 (참) 반복문실행 strCount = "*" + "*"("**"),console.log("**")
    // i=3 일때 3<=5 (참) 반복문실행 strCount = "**" + "*"("***"), console.log("***")
    // ...
    // strCount = strCount + "*";
    // 결과 출력
    // console.log(strCount);
// }

