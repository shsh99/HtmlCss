// 문제
// 연습문제 1)
// 현재 날짜를 아래와 같이 주어진다.
// 12시 이전이면 "오전입니다." 라고 출력하고,
// 12시 이후이면 "오후입니다." 라고 출력하는
// 프로그램을 코딩하세요.
// let date = new Date(); // 현재 날짜 (년, 월, 일, 시, 분, 초);

// 출력
// let date = new Date(); // 현재 날짜
// let hours = date.getHours() // 현재시간

// if(hours < 12) {
//     alert("오전입니다.");
// } else {
//     alert("오후입니다.");
// }

// 2) 
// 현재 날짜를 이용해서 아래와 같이 코딩하세요
// 현재 시각이 5시 이전이면 "잠을 자렴..."
//            7시 이전이면 "준비"
//            9시 이전이면 "출근"
//            12시 이전이면 "빈둥빈둥"
//            14시 이전이면 "식사"

// let date = new Date(); // 현재 날짜
// let hours = date.getHours() // 현재시간

// if(hours < 5) {
//     alert("잠을 자렴...");
// } else if(hours >=5 && hours < 7) {
//     alert("준비");
// }else if(hours >=7 && hours < 9) {
//     alert("출근");
// }else if(hours >=9 && hours < 12) {
//     alert("빈둥빈둥");
// }else if(hours >=12 && hours < 14) {
//     alert("식사");
// }

// 3)
// 연도, 월, 일이 닷(.)으로 구분되어 입력된다.
// 대시를 구분기호로 사용해서 일-월-연도로 바꾸어서
// 코딩용어 : -(마이너스, 대시)
// 출력하세요
// 입력 : 2020.3.4
// 출력 : 4-3-2020

// split()
// let char1 = prompt("날짜를 입력해 주세요").split("."); // 잘리면 배열이 됨
//  char1[0] = 2020, char1[1] = 3, char1[2] = 4

//  출력 : 문자열 붙이기
// alert(char1[2] + "-" + char1[1] + "-" + char1[0]);

// // let year = date.getFullYear(); // 년도
// // let month = date.getMonth(); // 월 (0 ~ 11)
// // let day = date.getDate(); // 일

// // console.log(day + "-" + month + "-" + year);

// 4) 2중 반복문(이중 루프, 반복문안에 반복문)
//  가로(10개) X 세로(5개) 형태
// 출력 : **********
//        **********
//        **********
//        **********
//        **********

// 문자열 붙이기 변수 초기화 : 결과
// let result = "";

// 2중 반복문 : 세로 (밖에 for문 : 줄바꿈 5번 반복)
// for(let j=0; j < 5; j++) {
    // 가로 (안에 for문 : * 10번 반복)
//     for(let i=0; i < 10; i++) {
//         result = result + "*"; // * 10 번 문자열 붙이기(가로)
//     }
//     result = result + "\n"; // \n 5번 문자열 붙이기(세로)
// }
// alert(result); // 결과 출력

