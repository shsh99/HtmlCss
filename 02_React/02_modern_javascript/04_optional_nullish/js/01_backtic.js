// 백틱(backtick)
// 모던 자바스크립트 === 이크마(ECMA Script) 자바스크립트
// 메타버스 === 가상환경
// 예제 : 아래와 같이 문자열과 변수를 같이 써서 출력하세요
// 출력 : num = 10
//        num = 20
//        num = 30
// let num = 10;
// let num2 = 20;
// let num3 = 30;
// console.log("num = " + num + "\n"
//              + "num = " + num2 + "\n"
//              + "num = " + num3);
// ``(백틱) : 키보드 왼쪽 위 1숫자 옆의 물결 자판(홑따옴표 아님)
// 문자열을 표현하는 새로운 방법
// 사용법 : `문자열${변수명}`;
// console.log(`num = ${num}
//             ,num2 = ${num2}
//             ,num3 = ${num3}`);

// 연습문제 1) 변수 2개를 사용해서 백틱으로 화면에 출력하세요
// 입력 : x
// 출력 : 안녕하세요 우리 교육센터에 방문하신 것을 환영합니다.
// let val = "안녕하세요";
// let val2 = "교육센터";
// console.log(`${val} 우리 ${val2}에 방문하신 것을 환영합니다.`);

// 2) 변수 3개를 사용해서 백틱으로 화면에 출력하세요
// 출력 :
// 4월은 잔인한 달 - 엘리엇
// 4월은 가장 잔인한 달
// 죽은 땅에서 라일락을 키워내고
// 기억과 욕망을 뒤섞고
// 봄비로 잠든 뿌리를 뒤흔든다
// let val = "4월";
// let val2 = "잔인한 달";
// let val3 = "라일락";
// console.log(`
// ${val}은 ${val2} - 엘리엇
// ${val}은 가장 ${val2}
// 죽은 땅에서 ${val3}을 키워내고
// 기억과 욕망을 뒤섞고
// 봄비로 잠든 뿌리를 뒤흔든다
// `)
