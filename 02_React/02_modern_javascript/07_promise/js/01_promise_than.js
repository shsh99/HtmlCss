// node : 1) 비동기 기능(성능 증가)
// 자바스크립트 코딩(비동기 프로그래밍 한다)
// 비동기 : 요청하면 결과가 먼저 처리한 곳에서 주는대로 실행함
//    장점 : 성능 증가
//    단점 : 순서에 맞는 결과가 중요하면 결과가 꼬일 수 있음
//    예) 은행 계좌 : 입금 -> 출금(비동기 시 입금되기전에 출금될수 있음)
//    (해결책 : promise 이용 : 순서에 입각해서 실행을 할 수 있음)
// (참고) 동기 : 요청한 순서대로 결과가 옴(c언어 등)
// 예제 :
// 1st 순서 :
console.log("학교에 값니다.");
// 2nd 순서 :
// 일정시간동안 지연해서 실행하는 함수
// 사용법 : setTimeout(함수(), 지연시간(ms));
setTimeout(() => {
  console.log("학교에 도착했습니다.");
}, 1000);
// 3rd 순서 :
console.log("열심히 코딩을 합니다.");

// TODO: 프라미스를 이용해서 개선
// 알필요없음 : 프라미스 객체 생성(x)
var goSchool = new Promise((resolve, reject) => {
  // 2초 지연 함수 : Promise 객체에 넣음
  setTimeout(function () {
    console.log("학교에 도착했습니다.");
    // resolve() : 결과 성공했다는 확인 함수
    resolve();
  }, 2000);
});

// TODO: 여기서 부터 알필요 있음
// 1st 실행
console.log("학교에 값니다.");
// 2nd : 비동기 코딩(순서를 지켜 출력시키기)
goSchool.then(() => {
  // console.log("학교에 도착했습니다."); 실행이 끝나면
  // 아래 실행문이 실행되게 보장하는 함수 : then()
  console.log("열심히 코딩을 합니다.");
});

let promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    var num = parseInt(prompt("10 미만의 숫자를 입력하십시오"));
    if (num <= 10) {
      // 결과가 성공 시 실행됨
      // 매개변수값을 .then 함수 안으로 전달할 수 있음
      // .then() 으로 전달됨
      resolve(num);
    } else {
      // 결과가 실패 시 실행됨
      // 매개변수값을 .then 함수 안으로 전달할 수 있음
      // .catch() 로 전달됨
      reject(`오류 :  ${num}은 10이상입니다`);
    }
  }, 1000);
});
