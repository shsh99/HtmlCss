- 송기동
// 1110  : 정수 그대로 출력하기
let num = Number(prompt("정수를 하나 입력하세요."));
alert(num);

// 1111 : %출력
let num = Number(prompt("0~100 사이 정수를 입력하세요."));
alert(num + "%");

// 1112 : 두 정수 출력
let num = Number(prompt("정수1"));
let num2 = Number(prompt("정수2"));
alert(num + " " + num2);

// 1113 : 바꿔서 출력하기
let num = Number(prompt("정수1"));
let num2 = Number(prompt("정수2"));
alert(num2 + " " + num);

// 1114,1115 :  두 정수의 덧셈
let num = Number(prompt("정수1"));
let num2 = Number(prompt("정수2"));
alert(num+num2);

// 1116 : 사칙연산 계산기
let num = Number(prompt("정수1"));
let num2 = Number(prompt("정수2"));
plusSum = num+num2
minusSum = num-num2
multiSum = num*num2
divSum = num/num2
console.log(num +"+" +num2  +"=" + plusSum  );
console.log(num +"-" +num2  +"=" + minusSum  );
console.log(num +"*" +num2  +"=" + multiSum  );
console.log(num +"/" +num2  +"=" + Math.floor(divSum)  );

// 1117 :  두 실수의 곱
let num = Number(prompt("정수1"));
let num2 = Number(prompt("정수2"));
sum = (num*num2);
console.log(sum.toFixed(2));

// 1118 : 삼각형의 넓이 구하기
const input = prompt("밑변과 높이를 입력하세요 (예: 5 2):").split(" ");
const base = parseInt(input[0]);
const height = parseInt(input[1]);
const area = (base * height) / 2;
console.log(area.toFixed(1));

// 1119 : 일을 시간으로 변환
const day = parseInt(prompt("일(day)을 입력하세요:"));
const hours = day * 24;
console.log(`시간으로 변환: ${hours}`);

// 1120 : 세 수의 평균
const input = prompt("세 정수를 입력하세요 (예: 1 2 3):").split(" ");
const num1 = parseInt(input[0]);
const num2 = parseInt(input[1]);
const num3 = parseInt(input[2]);
const average = (num1 + num2 + num3) / 3;
console.log(average.toFixed(2));

// 1121 : 나머지 구하기
const input = prompt("두 정수를 입력하세요 (예: 7 5):").split(" ");
const a = parseInt(input[0]);
const b = parseInt(input[1]);
const remainder = a % b;
console.log(`나머지: ${remainder}`);

// 1122 : 초를 분/초로 변환
const seconds = parseInt(prompt("초를 입력하세요:"));
const minutes = Math.floor(seconds / 60);
const remainingSeconds = seconds % 60;
console.log(`${minutes}분 ${remainingSeconds}초`);

// 1123 : 섭씨 온도를 화씨 온도로 변환
let cTemperature = Number(prompt("섭씨온도를 입력하세요"));
let fTemperature = (cTemperature * 9/5) + 32;
console.log(fTemperature.toFixed(3);

// 1125 : 8진수 16진수 변환
let num = Number(prompt("10진수 정수를 입력하세요"));
console.log(num.toString(16);
console.log(num.toString(8);

// 1131,32,33 : 문자 출력하기
let input = prompt("문자를 입력하세요:");
alert(input);

// 1135 : 관계연산자1
let a = parseInt(prompt("첫 번째 정수를 입력하세요:"));
let b = parseInt(prompt("두 번째 정수를 입력하세요:"));
if (a >= b) {
  console.log(1);
} else {
  console.log(0);
}

// 1136 : 관계연산자2
let a = parseInt(prompt("첫 번째 정수를 입력하세요:"));
let b = parseInt(prompt("두 번째 정수를 입력하세요:"));
if (a == b) {
  console.log(1);
} else {
  console.log(0);
}

// 1137 : 관계연산자3
let a = parseInt(prompt("첫 번째 정수를 입력하세요:"));
let b = parseInt(prompt("두 번째 정수를 입력하세요:"));
if (a == b) {
  console.log(0);
} else {
  console.log(1);
}

// 1138 : 논리연산자(NOT)
// 사용자로부터 1 또는 0을 입력받음
let userInput = prompt("1 또는 0을 입력하세요:");

// 입력값이 "1" 또는 "0"인지 확인하고 논리연산자 !를 사용하여 반대의 결과를 출력
if (userInput === "1" || userInput === "0") {
    let booleanInput = userInput === "1";
    let result = !booleanInput;
    console.log("반대 결과: " + (result ? "1 (참)" : "0 (거짓)"));
} else {
    console.log("올바른 입력이 아닙니다. 1 또는 0을 입력하세요.");
}

// 1139 : 논리연산자(AND)
// 두 개의 정수를 입력받음
let input = prompt("두 개의 정수를 입력하세요 (예: 1 0):");
let inputs = input.split(" "); // 입력값을 공백을 기준으로 분리하여 배열로 저장

// 입력값이 두 개인지 확인
if (inputs.length === 2) {
    // 입력값이 모두 "1"인 경우에만 1을 출력
    if (inputs[0] === "1" && inputs[1] === "1") {
        console.log("1");
    } else {
        console.log("0");
    }
} else {
    console.log("두 개의 정수를 입력하세요.");
} - 송기동

// 2번 이준혁님 23문제 (1140 ~ 1166)
// 기초2. 입출력문 및 연산자
// 1140, 1143, 1144, 1147 ~ 1150,
// 기초3. if ~ else
// 1151 ~ 1166

// TODO 1140

// 문제 설명
// 두 가지의 참(1) 또는 거짓(0)이 입력될 때, 둘 중 하나라도 참일 경우 1이, 그렇지 않으면 0이 출력되는 프로그램을 작성해보자.

// 참고)
// 논리연산자 || 는 주어진 2개의 논리값이 하나라도 참(1) 일 때에 1(참)으로 계산하고, 이외의 경우에는 0(거짓) 으로 계산한다.
// 이러한 논리 연산을 OR 연산이라고도 부르고, ||로 표시한다.

// 입력
// 두 정수가 입력된다.

// 출력
// 두 정수 중 하나의 값이 참(1) 이면 참(1), 그렇지 않으면 거짓(0)을 출력한다.

// 입력 예시   
// 0 1

// 출력 예시
// 1

// let a = Number(prompt("첫 번째 정수를 입력하세요"));
// let b = Number(prompt("두 번째 정수를 입력하세요"));

// if(a === 1 || b === 1) {
//    console.log("1");
// } else {
//    console.log("0");
// }

// TODO 1143

// 문제 설명
// 두 수를 입력받아 비트단위로 AND연산한 후 결과를 출력하시오.

// 참고)
// 비트연산자 & 는 주어진 2개의 값을 2진법으로 변환한 뒤, 비트별로 AND 연산을 수행한 뒤 결과를 출력한다.
// 이러한 비트 연산을 AND 연산이라고도 부르고, &로 표시한다.
// 7 : 0000 0111
// 4 : 0000 0100
// 7&4 : 0000 0100  --> 10진수 : 4

// 입력
// 두 정수가 입력된다.(int범위)

// 출력
// 두 정수를 비트단위로 AND 연산한 후 결과를 10진수로 출력한다.

// 입력 예시   
// 3 5

// 출력 예시
// 1

// let a = Number(prompt("첫 번째 수를 입력하세요"));
// let b = Number(prompt("두 번째 수를 입력하세요"));
// let result = a & b;
// console.log(result);

// TODO 1144

// 문제 설명
// 두 수를 입력받아 비트단위로 OR연산한 후 결과를 출력하시오.

// 참고)
// 비트연산자 | 은 주어진 2개의 값을 2진법으로 변환한 뒤, 비트별로 OR 연산을 수행한 뒤 결과를 출력한다.
// 이러한 비트 연산을 OR 연산이라고도 부르고, |로 표시한다.
// 예)
// 7 : 0000 0111
// 4 : 0000 0100
// 7|4 : 0000 0111

// 입력
// 두 정수가 입력된다.(int)

// 출력
// 두 정수를 비트단위로 OR 연산한 후 결과를 10진수로 출력한다.

// 입력 예시   
// 3 5

// 출력 예시
// 7

// let a = Number(prompt("첫 번째 수를 입력하세요"));
// let b = Number(prompt("두 번째 수를 입력하세요"));
// let result = a | b;
// console.log(result);

// TODO 1147
// 문제 설명
// 정수 a, x를 입력받아 a의 값을 x만큼 SHIFT(<<) 연산한 후 결과를 출력하시오.

// 참고)
// 비트 이동연산자 << 은 주어진 a를 구성하고 있는 비트를 왼쪽으로 x번 이동한 후 결과를 보여준다.
// 이러한 비트 연산을 SHIFT 연산이라고도 부르고, <<로 표시한다.
// 예)
// 4<<1 : 0000 0100 ---> 0000 1000 (10진수:8)
// 4<<2 : 0000 0100 ---> 0001 0000 (10진수:16)

// 입력
// 두 정수 a, x입력.(1<=a<=100,000 , 1<=x<=10)

// 출력
// a를 x번 SHIFT(<<) 연산한 후 결과를 10진수로 출력한다.

// 입력 예시   
// 3 3

// 출력 예시
// 24

// let a = Number(prompt("첫 번째 수를 입력하세요"));
// let x = Number(prompt("두 번째 수를 입력하세요"));
// let result = a << x;
// console.log(result);

// TODO 1148
// 문제 설명
// 정수 a, x를 입력받아 a의 값을 x만큼 SHIFT(>>) 연산한 후 결과를 출력하시오.

// 참고)
// 비트연산자 >> 은 주어진 a값을 오른쪽으로 x번 이동한 후 결과를 출력한다.
// 이러한 비트 연산을 SHIFT 연산이라고도 부르고, >>로 표시한다.

// 예)

// 4>>1 : 0000 0100 ---> 0000 0010 (10진수:2)
// 7>>2 : 0000 0111 ---> 0000 0001 (10진수:1)

// 입력
// 두 정수 a, x입력.(1<=a<=100,000 , 1<=x<=10)

// 출력
// a를 x번 SHIFT(>>) 연산한 후 결과를 10진수로 출력한다.

// 입력 예시   
// 4 1

// 출력 예시
// 2

// let a = Number(prompt("첫 번째 정수를 입력하세요"));
// let x = Number(prompt("두 번째 정수를 입력하세요"));
// let result = a >> x;
// console.log(result);

// TODO 1149
// 문제 설명
// 두 정수 중 큰 정수를 출력한다.

// 입력
// 두 정수가 입력된다.

// 출력
// 두 정수 중 큰 정수를 출력한다.

// 입력 예시   
// 2 7

// 출력 예시
// 7

// let a = Number(prompt("첫 번째 정수를 입력하세요"));
// let b = Number(prompt("두 번째 정수를 입력하세요"));
// let max = Math.max(a, b);
// console.log(max);

// TODO 1150
// 문제 설명
// 세 정수가 주어지면 그 중 가장 작은 수를 출력한다.

// 입력
// 세 정수가 주어진다.

// 출력
// 가장 작은 값을 출력한다.

// 입력 예시   
// 3 5 2

// 출력 예시
// 2

// let a = Number(prompt("첫 번째 정수입력"));
// let b = Number(prompt("두 번째 정수입력"));
// let c = Number(prompt("세 번째 정수입력"));
// let min = Math.min(a, b, c);
// console.log(min);


// TODO 1151
// let a = +prompt();
// if (a < 10) {
//   alert("small");
// }

// TODO 1152
// let a = +prompt();
// if (a < 10) {
//   alert("small");
// } else {
//   alert("big");
// }

// TODO 1153
// let a = +prompt();
// let b = +prompt();
// if (a > b) {
//   alert(">");
// } else if (b > a) {
//   alert("<");
// } else if (a === b) {
//   alert("=");
// }

// TODO 1154
// let a = +prompt();
// let b = +prompt();
// if (a > b){
//     alert(a-b);
// } else if (b > a){
//     alert(b-a);
// }

// TODO 1155
// let a = +prompt("숫자입력");
// if (a % 7 === 0) {
//   alert("multple");
// } else {
//   alert("not multiple");
// }

// TODO 1156
// let a = +prompt("자연수 입력");
// if (a % 2 == 1) {
//   console.log("odd");
// } else if (a % 2 == 0) {
//   console.log("even");
// }

// TODO 1157
// let a = +prompt();
// if(a >= 50 && a <= 60){
//     alert("win");
// } else {
//     alert("lose");
// }

// TODO 1158
// let a = +prompt();
// if ((a >= 30 && a <= 40) || (a >= 60 && a <= 70)) {
//   alert("win");
// } else {
//   alert("lose");
// }

// TODO 1159
// let a = +prompt();
// if ((a >= 50 && a <= 70) || a % 6 === 0) {
//   alert("win");
// } else {
//   alert("lose");
// }

// TODO 1160
// let a = +prompt();
// if (a % 2 === 1) {
//   alert("oh my god");
// } else if (a % 2 === 0) {
//   alert("enjoy");
// }

// TODO 1161
// 문제 설명
// 정수 두개가 입력으로 들어온다.
// 만약 첫번째 정수가 홀수이면 "홀수"를 출력하고, 짝수이면 "짝수"를 출력한 후  "+"를 출력한다.
// 그리고 두번째 정수가 홀수이면 "홀수"를 출력하고, 짝수이면 "짝수"를 출력한 후  "="을 출력하고 결과로 나오는 값이 홀수인지 짝수인지 출력한다.

// 예를들어,
// 5 7 이 입력되면 "홀수+홀수=짝수"가 출력된다.
// 5 6 이 입력되면 "홀수+짝수=홀수"가 출력된다.

// 입력
// 정수 두개가 입력된다.

// 출력
// 만약 첫번째 정수가 홀수이면 "홀수"를 출력하고, 짝수이면 "짝수"를 출력한 후  "+"를 출력한다.
// 그리고 두번째 정수가 홀수이면 "홀수"를 출력하고, 짝수이면 "짝수"를 출력한 후  "="을 출력하고 결과로 나오는 값이 홀수인지 짝수인지 출력한다.

// 입력 예시
// 2 3

// 출력 예시
// 짝수+홀수=홀수
// let a = +prompt();
// let b = +prompt();
// let result1 = "";
// let result2 = "";
// let result3 = "";
// if(a % 2 === 1){
//     result1 = "홀수" + "+";
// } else {
//     result1 = "짝수" + "+";
// }
// if(b % 2 === 1){
//     result2 = "홀수" + "=";
// } else {
//     result2 = "짝수" + "=";
// }
// if ((a + b) % 2 === 1){
//     result3 = "홀수";
// } else {
//     result3 = "짝수";
// }
// console.log(result1 + result2 + result3 );

// TODO 1162
// 문제 설명
// 태어난 해, 월, 일을 입력받아 사주팔자를 보는 프로그램을 작성하시오.

// 사주를 보는 방법)
// 세 수(년,월,일)가 주어지면,  (년 - 월 + 일)에 마지막 숫자가 0이면 "대박"을 출력, 그렇지 않으면 "그럭저럭"을 출력하세요.

// 입력
// 세 정수가 입력으로 주어진다. 순서대로 년도, 월, 일 이다.

// 출력
// 년도 - 월 + 일의 마지막 숫자가 0이면 "대박"을 , 그렇지 않으면 "그럭저럭"을 출력하시오.

// 입력 예시
// 1902 2 10

// 출력 예시
// 대박

// let date = prompt("년 월 일을 입력하세요", "1902 2 10").split(" ");
// let result = +(date[0] - date[1] + date[2]);
// if(result % 10 === 0){
//     alert("대박");
// } else {
//     alert("그럭저럭");
// }

// TODO 1163
// 문제 설명
// 태어난 해, 월, 일을 입력받아 사주팔자를 보는 프로그램을 작성하시오.

// 사주를 보는 방법)

// 세 수(년,월,일)가 주어지면,  (년 + 월 + 일)에 100의 자리 숫자가 짝수이면 "대박"을 출력, 그렇지 않으면 "그럭저럭"을 출력하세요.

// 입력
// 세 정수가 입력으로 주어진다. 순서대로 년도, 월, 일 이다.

// 출력
// 년도 + 월 + 일의 100의 자리가 숫자가 짝수이면 "대박"을 , 그렇지 않으면 "그럭저럭"을 출력하시오.

// 입력 예시
// 1502 2 10

// 출력 예시
// 그럭저럭

// let date = prompt("년 월 일을 입력하세요", "1502 2 10").split(" ");
// let result = +(date[0] + date[1] + date[2]);
// let result2 = (result / 100000).toFixed(0);
// if(result2 % 2 === 0){
//     alert("대박");
// } else {
//     alert("그럭저럭");
// }

// TODO 1164
// 문제 설명
// 어떤 차의 높이가 170cm 이다.
// 이 차는 3개의 터널을 차례대로 지나게 될 것이다.
// 터널의 높이가 차의 높이보다 같거나 낮다면 차는 터널과 충돌하여 사고가 날 것이다.
// 터널의 높이가 차례대로 3개 주어지면 터널을 무사히 잘 통과하면 PASS 를 출력하고, 사고가 난다면 CRASH 를 출력하시오.

// 입력
// 터널의 높이가 차례대로 3개 주어진다. (정수)

// 출력
// 170보다 같거나 작으면 "CRASH"를 출력, 그 보다 크면 "PASS"를 출력하시오.

// 입력 예시
// 170 168 175

// 출력 예시
// CRASH

// let carHeight = 170;
// let t_hight = prompt("터널의 높이를 입력해주세요", "170 168 175").split(" ");
// let array = +t_hight;
// for(let i = 0; i < t_hight.length; i++){
//     if(carHeight >= t_hight[i]){
//         console.log("CRASH");
//         break;
//     } else {
//         console.log("PASS");
//     }
// }

// TODO 1165
// 문제 설명
// 지금 1반과 2반이 축구를 하고있다.
// 축구경기 타임은 총 90분이고,
// 현재 1반이 0점, 2반이 2점인 상황에서, 1반은 경남정보고 최고의 스트라이커인 성익이를 투입하기로 결정했다.
// 성익이는 5분마다 골을 넣을 수 있는 능력을 가지고 있다.
// 만약 80분에 투입이 되면 80분에 곧바로 골을 넣게되고 85분에 골을 넣음으로서 동점이 가능하게 된다.
// (90분이되면 경기가 바로 종료되므로 골을 넣을 수 없다. 동내심판인 성빈이는 성익이가 잘 되는 것을 싫어하기 때문에 추가시간 따위는 주지 않는다. )
// 현재 경기타임과 우리팀의 득점이 입력으로 주어 질때, 성익이를 투입하면 우리팀의 최종 득점은 몇 점인지 출력하시오.

// 입력
// 현재 경기시간과 우리팀의 득점이 입력으로 주어진다.(정수)

// 출력
// 경기가 끝났을때 우리팀의 득점을 출력한다.

// 입력 예시
// 74 2

// 출력 예시
// 6

// let time = +prompt("시간입력", "74");
// let score = +prompt("점수", "2");

// time = 90 - time;
// if(time === 0){
//     console.log(time); // 90분에 골넣는건 불가.
// } else {
//     score += 1;
//     if(time >= 5){
//         score += (time - 1) / 5;
//     }
//     console.log(score);
// }
// time = Number(time)
// while (time < 90) {
//     score++;
//     time += 5;
// }




// TODO 1166
// 문제 설명
// 2월이 29일까지 있는 해를 윤년이라고 한다.

// 한 자연수를 입력받아서 윤년인지 아닌지를 판단하는 프로그램을 작성하시오.
// 단, 윤년은 다음 두 조건 중 하나만 만족하면 된다.
// (1) 400의 배수이면 무조건 윤년이다.
// (2) 4의 배수이며, 100의 배수가 아니면 윤년이다.

// 예)

// 2000 년 ====> 윤년 (1번 조건)
// 2004 년 ====>  윤년(2번 조건)
// 1900 년 ====> 윤년 아님
// 1999 년 ====> 윤년 아님

// 입력
// 입력은 키보드로 이루어진다. 연도를 나타내는 자연수 n이 입력된다.
// (단, 1<= n <= 2^32 - 1인 정수)

// 출력
// 입력받은 자연수가 윤년이라면 "Leap"를 아니라면 "Normal"을 출력한다.

// 입력 예시
// 2012

// 출력 예시
// Leap

// let year = Number(prompt("년도를 입력해주세요", "2012"));
// if((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ){
//     console.log("Leap");
// } else {
//     console.log("Normal");
// }

// TODO : 1167 : 두 번째 수 - 신동구

// let num = prompt("3개의 숫자를 입력하세요");
// let number = num.split(" ");
// let num1 = Number(number[0]);
// let num2 = Number(number[1]);
// let num3 = Number(number[2]);
// let small, middle, big;
// if (num1 <= num2 && num1 <= num3) {
//   small = num1;
//   if (num2 <= num3) {
//     middle = num2;
//     big = num3;
//   } else {
//     middle = num3;
//     big = num2;
//   }
// } else if (num2 <= num1 && num2 <= num3) {
//   small = num2;
//   if (num1 <= num3) {
//     middle = num1;
//     big = num3;
//   } else {
//     middle = num3;
//     big = num1;
//   }
// } else {
//   small = num3;
//   if (num1 <= num2) {
//     middle = num1;
//     big = num2;
//   } else {
//     middle = num2;
//     big = num1;
//   }
// }

// console.log("작은 순서로 나열 :", small, middle, big);
// console.log("두 번째 수 :", middle);

// TODO : 1168 : 나이 계산 1

// let num = prompt();
// let num2 = num.split(" ");

// if (num2[1] == 1 || num2[1] == 2) {
//   alert(2013 - (parseInt(parseInt(num2[0]) / 10000) + 1900));
// } else {
//   alert(2013 - (parseInt(parseInt(num2[0]) / 10000) + 2000));
// }

// TODO : 1170 : 당신의 학번은? 1

// let num = prompt();
// let num2 = num.split(" ");
// if (parseInt(num2[2]) >= 10) {
//   alert(num2[0] + num2[1] + num2[2]);
// } else {
//   alert(num2[0] + num2[1] + 0 + num2[2]);
// }

// TODO : 1171 : 당신의 학번은? 2

// let num = prompt();
// let num2 = num.split(" ");
// if (parseInt(num2[2]) < 10) {
//   num2[2] = "0" + "0" + num2[2];
// } else if (parseInt(num2[2]) < 100) {
//   num2[2] = 0 + num2[2];
// }

// if (parseInt(num2[1]) < 10) {
//   num2[1] = 0 + num2[1];
// }
// alert(num2[0] + num2[1] + num2[2]);
// }

// TODO 1218 : 삼각형 판단하기

// let num = prompt();
// let num2 = num.split(" ");
// let max = Math.max(num2[0], num2[1], num2[2]);
// let min = Math.min(num2[0], num2[1], num2[2]);
// let mid = parseInt(num2[0]) + parseInt(num2[1]) + parseInt(num2[2]) - max - min;

// if (num2[0] == num2[1] && num2[1] == num2[2]) {
//   alert("정삼각형");
// } else if (num2[0] == num2[1] || num2[0] == num2[2] || num2[1] == num2[2]) {
//   alert("이등변삼각형");
// } else if (Math.pow(max, 2) == Math.pow(mid, 2) + Math.pow(min, 2)) {
//   alert("직각삼각형");
// } else if (max < mid + min) {
//   alert("삼각형");
// } else {
//   alert("삼각형아님");
// }

// TODO 1222 : 축구의 신 2

// let num = prompt();
// let num2 = num.split(" ");
// let result = 0;

// if (parseInt(num2[0]) < 90) {
//   if (parseInt(num2[0]) % 10 == 0 || parseInt(num2[0]) % 10 == 5) {
//     result = parseInt(num2[1]) + parseInt((90 - parseInt(num2[0])) / 5);
//   } else {
//     result = parseInt(num2[1]) + parseInt((90 - parseInt(num2[0])) / 5 + 1);
//   }
// } else {
// }

// if (parseInt(result) > parseInt(num2[2])) {
//   alert("win");
// } else if (result == num2[2]) {
//   alert("same");
// } else {
//   alert("lose");
// }

// TODO 1224 : 분수 크기

// let num = prompt();
// let num2 = num.split(" ");
// if (
//   parseInt(num2[0]) / parseInt(num2[1]) >
//   parseInt(num2[2]) / parseInt(num2[3])
// ) {
//   alert(">");
// } else if (
//   parseInt(num2[0]) / parseInt(num2[1]) ==
//   parseInt(num2[2]) / parseInt(num2[3])
// ) {
//   alert("=");
// } else {
//   alert("<");
// }

// TODO 1226 : 이번 주 로또

// let lotto = [5, 8, 14, 24, 32, 41, 1];
// let bonus = 1;

// let num = prompt("로또 번호를 입력하세요 예시(1 2 3 4 5 6)");
// let a = num.split(" ").map(Number);
// let matching = 0;

// for (let i = 0; i < 6; i++) {
//   if (lotto.includes(a[i])) {
//     matching++;
//   }
// }

// let result;

// if (matching === 6) {
//   result = 1;
// } else if (matching === 5 && a.includes(bonus)) {
//   result = 2;
// } else if (matching === 5) {
//   result = 3;
// } else if (matching === 4) {
//   result = 4;
// } else if (matching === 3) {
//   result = 5;
// } else {
//   result = 0;
// }
// alert("당첨 결과 : " + result + "등");

// 또는;

// let a = prompt();
// let b = a.split("\n");
// let c1 = b[0].split(" ");
// let c2 = b[1].split(" ");

// let bonus = c1[6];
// let cnt = 0;
// let bo = 0;

// for (let i = 0; i <= 5; i++) {
//   for (let j = 0; j <= 5; j++) {
//     if (c1[i] == c2[j]) {
//       cnt++;
//     }
//   }
// }

// for (let i = 0; i <= 5; i++) {
//   if (parseInt(c2[i]) == parseInt(bonus)) {
//     bo++;
//   }
// }

// if (cnt == 6) {
//   alert(1);
// } else if (cnt == 5 && bo == 1) {
//   alert(2);
// } else if (cnt == 5) {
//   alert(3);
// } else if (cnt == 4) {
//   alert(4);
// } else if (cnt == 3) {
//   alert(5);
// } else {
//   alert(0);
// }

// TODO 1228 : 비만도 측정 1
// let num = prompt("키와 몸무게를 입력하세요(공백 기준)");
// let num2 = num.split(" ");
// let bmi1 = (num2[0] - 100) * 0.9;
// let bmi2 = ((num2[1] - bmi1) * 100) / bmi1;
// if (bmi2 <= 10) {
//   alert("정상");
// } else if (bmi2 > 10 && bmi2 < 20) {
//   alert("과체중");
// } else {
//   alert("비만");
// } - 신동구


// 1229 - 이주영
// let input = prompt();
// let cut = input.split(" ").map(Number);
// let result = "";
// let avgWeight = 0;

// // 표준 몸무게 구하는 공식
// if (cut[0] < 150) {
//     avgWeight = cut[0]-100;
// } else if (cut[0] >= 150 && cut[0] < 160) {
//     avgWeight = (cut[0]-150)/2+50;
// } else {
//     avgWeight = (cut[0]-100)*0.9;
// }

// // 비만도 계산 공식
// let bmi = ((cut[1]-avgWeight)*100)/avgWeight;

// // 비만도에 따른 등급 판정
// if (bmi > 20) {
//     result = "비만";
// } else if (bmi > 10) {
//     result = "과체중"
// } else {
//     result = "정상"
// }

// console.log(result);


// 1230
// let input = prompt();
// let cut = input.split(" ").map(Number);
// let result = "";
// // 첫번째 터널이 170이하라면 
// if (cut[0] <= 170) {
//     result = "crash, "+cut[0];
//     // 두번째 터널이 170 이하라면
// } else if (cut[1] <= 170) {
//     result = "crash, "+cut[1];
//     // 3번째 터널이 170 이하라면
// } else if (cut[2] <= 170) {
//     result = "crash, "+cut[2];
//     // 터널 중 170이하가 없다면
// } else {
//     result ="pass"
// }
// console.log(result);

// 1231
// let input = prompt();
// let result = "";
//     // 만약 input에 +가 포함되어 있다면
//     if (input.includes("+")) {
//         let cut = input.split("+").map(Number);
//         result = cut[0]+cut[1];
//         // 만약 input에 -가 포함되어 있다면
//     } else if (input.includes("-")) {
//         let cut = input.split("-").map(Number);
//         result = cut[0]-cut[1];
//         // 만약 input에 *이 포함되어 있다면
//     } else     if (input.includes("*")) {
//         let cut = input.split("*").map(Number);
//         result = cut[0]*cut[1];
//         // 만약 input에 /이 포함되어 있다면
//     } else     if (input.includes("/")) {
//         let cut = input.split("/").map(Number);
//         result = (cut[0]/cut[1]).toFixed(2);
//         // input에 /이 포함되어 있는데 나누는 숫자중 하나가 0이라면
//         if (cut[0] == 0 || cut[1] == 0) {
//             result = "error";
//         }
//     }
// console.log(result);

// 1251
// let result = "";
// for (let i = 1; i <= 100; i++) {
//     result += i+" ";
// }
// document.querySelector("h2").innerHTML = result;

// 1252
// let input = Number(prompt());
// let result = "";
// for (let i = 1; i <= input; i++) {
//     result += i+" ";
// }
// document.querySelector("h2").innerHTML = result;

// 1253
// let input = prompt();
// let cut = input.split(" ");
// let result = "";
// for (let i = Math.min(cut[0], cut[1]); i <= Math.max(cut[0], cut[1]); i++) {
//     result += i+" ";
// }
// document.querySelector("h2").innerHTML = result;

// 1254
// let input = prompt();
// let cut = input.split(" ");
// let result = "";
// for ( let i = cut[0].charCodeAt(); i <= cut[1].charCodeAt(); i++) {
//     result += String.fromCharCode(i)+" ";
//     console.log(i)
// }
// document.querySelector("h2").innerHTML = result;

// 1255
// let input = prompt();
// let cut = input.split(" ");
// let result = "";

// for (let i = Number(cut[0]); i <= Number(cut[1]); i += 0.01) {
//     result += i.toFixed(2)+" ";
// }
// document.querySelector("h2").innerHTML = result;

// 1256
// let input = Number(prompt());
// let result = "";
// for (let i = 1; i <= input; i++) {
//     result +="*";
// }
// document.querySelector("h2").innerHTML = result;

// 1257
// let input = prompt();
// let cut = input.split(" ");
// let result = "";
// let max = Math.max(cut[0], cut[1]);
// let min = Math.min(cut[0], cut[1])

// for (let i = min; i <= max; i++) {
//     if (i%2 == 1) {
//         result += i;
//     }
// }
// document.querySelector("h2").innerHTML = result;

// 1258
// let input = Number(prompt());
// let result = 0;
// for (let i = 1; i <= input; i++) {
//     result += i;
// }
// document.querySelector("h2").innerHTML = result;

// 1259
// let input = Number(prompt());
// let result = 0;
// for (let i = 1; i <= input; i++) {
//     if (i%2 == 0) {
//     result += i;
//     }
// }
// document.querySelector("h2").innerHTML = result;

// 1260
// let input = Number(prompt());
// let result = 0;
// for (let i = 1; i <= input; i++) {
//     if (i%3 == 0) {
//     result += i;
//     }
// }
// document.querySelector("h2").innerHTML = result;

// 1261
// let input = prompt();
// let cut = input.split(" ");
// let result = "";

// for (let i = 0; i < cut.length; i++) {
//     if (cut[i]%5 == 0) {
//         result = cut[i];
//         break;
//     } else {
//         result = "0";
//     }
// }
// document.querySelector("h2").innerHTML = result;

// 1265
// let input = Number(prompt());
// let result = "";
// if (input < 10 && input > 0) {
// for (let i = 1; i <= 9; i++) {
//     result += input+"*"+i+" = "+(input*i)+"<br>";
// }
// }
// document.querySelector("h2").innerHTML = result;

// 1266
// let input = Number(prompt());
// let input2 = prompt();
// let cut = input2.split(" ");
// let result = 0;

// for (let i = 0; i < input; i++) {
//     result += Number(cut[i]);
// }
// document.querySelector("h2").innerHTML = result;

// 1267
// let input = Number(prompt());
// let input2 = prompt();
// let cut = input2.split(" ");
// let result = 0;

// for (let i = 0; i < input; i++) {
//     if (cut[i]%5 == 0) {
//     result += Number(cut[i]);
//     }
// }
// document.querySelector("h2").innerHTML = result;

// 1268
// let input = Number(prompt());
// let input2 = prompt();
// let cut = input2.split(" ");
// let result = 0;

// for (let i = 0; i < input; i++) {
//     if (cut[i]%2 == 1) {
//     result++;
//     }
// }
// document.querySelector("h2").innerHTML = result;

// 1269
// let input = prompt();
// let cut = input.split(" ");
// let result = cut[0];
// for (let i = 0; i < cut[3]-1; i++) {
//     result = Number(result*cut[1])+Number(cut[2]);
// }
// document.querySelector("h2").innerHTML = result

// 1270
// let input = Number(prompt());
// let result = 0;
// for (let i = 1; i <= input; i++) {
//     if ((i.toString())[i.toString().length-1].includes("1")) {
//         result++;
//     }
// }
// document.querySelector("h2").innerHTML = result;

// 1271
// let input = Number(prompt());
// let input2 = prompt();
// let cut = input2.split(" ");
// let result = 0;

// for (let i = 0; i < input; i++) {
//     if (result < cut[i]) {
//         result = cut[i];
//     }
// }
// document.querySelector("h2").innerHTML = result;

// 1272
// let input = prompt();
// let cut = input.split(" ");
// let max = Math.max(Number(cut[0]),Number(cut[1]))
// let result = 0;

// for (let i = 0; i < cut.length; i++) {
// if (cut[i]%2 == 0) {
//     result += (cut[i]/2)*10;
// } else {
//     result += Number((cut[i]/2).toFixed());
// }
// }

// document.querySelector("h2").innerHTML = result;

// 1273
// let input = Number(prompt());
// let result = ""
// for (let i = 0; i <= input; i++) {
//     if (input%i == 0) {
//         result += i+" ";
//     }
// }
// document.querySelector("h2").innerHTML = result

// TODO : 1274 ~ 1675 - 이지우
// TODO : 1274
// 어떤 수가 입력되면 그 수가 소수인지 판단하시오.
// 입력 : 7 (2 이상의 자연수가 입력으로 주어진다.)
// 입력으로 주어진 수가 소수이면 "prime" 을 출력, 아니면 "not prime" 을 출력한다.
let inputNum = Number(prompt());
let a = 0;
for(let i1 = 1; i1 <= inputNum; i1++){
    if(inputNum % i1 === 0){
        a = a + 1;
    }
}
if(a == 2){
    alert("prime");
} else {
    alert("not prime");
}


// TODO : 1275
// 어떤 수 n과 k가 있다.
// nk는 n을 k번 곱한 것을 말한다.
// 입력으로 n과 k가 주어지면 결과를 출력한다.
// 예)
// 5 의 2 제곱 = 25
// 2 의 4 제곱 = 16
let n = Number(prompt());
let k = Number(prompt());

let x = 1;
for(let i2 = 0; i2 < k; i2++){
    x = x * n;
}
alert(x);


// TODO : 1276
// 팩토리얼(!)은 다음과 같이 정의된다.
// n! = n * (n-1) * (n-2) * ... * 2 * 1
// 즉, 5! = 5 * 4 * 3 * 2 * 1 = 120 이다.
// n이 입력되면 n!의 값을 출력하시오.
// 입력 : 자연수 n이 입력된다. (n <= 12)
let n2 = Number(prompt());
let x2 = 1;
for(let i3 = 1; i3 <= n2; i3++){
    x2 = x2 * i3;
}
alert(x2);


// TODO : 1277
// 첫 줄에 데이터의 개수 N(N은 홀수)이 입력되고, 그 다음 줄에 N개의 데이터가 입력된다.
// 여기서 첫번째 데이터, 중간 데이터, 마지막 데이터를 출력하시오.
// 예) 
// 5
// 2 4 6 1 7
// 이면
// 2 6 7
// 이 출력된다.
// (첫번째 데이터 2, 중간 데이터 6, 마지막 데이터 7)
let n3 = Number(prompt("1 이상인 홀수(자연수)를 입력하세요"));
let n4 = prompt(n3 + " 가지의 숫자를 공백으로 구분하여 입력하세요");
var arr = n4.split(" ");
var result1 = "";

result1 = arr.slice(0, 1) + arr.slice(n3/2, n3/2 + 1) + arr.slice(n3 - 1, n3);

alert(result1);


// TODO : 1278
// 어떤 숫자가 입력되면 그 숫자가 몇 자릿수 숫자인지 알아내는 프로그램을 작성하시오.
// 예)
// 7   ----> 1   (1자릿수)
// 10  ----> 2   (2자릿수)
// 4322 ----> 4   (4자릿수)
// 입력 : 1이상의 자연수 n이 입력된다. (n은 int 범위)
let n5 = Number(prompt("자연수 하나를 입력하세요"));
alert("입력한 숫자는 "+ n5.toString().length + " 자리 수 입니다.");


// TODO : 1279
// 두 자연수 a, b 사이의 구간에 대해서
// 홀수는 더하고 짝수는 뺀다음의 합을 출력하시오.
// 예)
// a = 5, b=10 일 경우, 5 - 6 + 7 - 8 + 9 - 10 = -3
// 입력 : 두 자연수 a, b를 입력 받는다. (반드시 a가 b보다 같거나 작게 입력된다.)
// 출력 : a, b 사이의 수 중 홀수는 더하고 짝수는 뺀 결과를 출력하시오.
let a1 = Number(prompt("시작 숫자"));
let b1 = Number(prompt("종료 숫자"));
var result2 = 0;

for(let i4 = a1; i4 <= b1; i4++){
    if(i4 % 2 === 1){
        result2 = result2 + i4;
    } else if(i4 % 2 === 0) {
        result2 = result2 - i4;
    }
}

alert(result2);


// TODO : 1280
// 두 자연수 a, b 사이의 구간에 대해서
// 홀수는 더하고 짝수는 빼는 식을 보여준 후 결과를 출력하시오.
// 단, 결과가 양수이면 +를 붙이지 않는다.
// 예)
// a = 5, b=10 일 경우, +5-6+7-8+9-10=-3
// a = 6, b=9 일 경우, -6+7-8+9=2
// 입력 : 두 자연수 a, b를 입력 받는다. (반드시 a가 b보다 같거나 작게 입력된다.)
// 출력 :  홀수는 더하고 짝수는 빼는 식을 보여준후 결과를 출력한다.(예시 참고)
// 첫수가 양수일 경우에도 앞에 +를 붙여서 출력.
// 단 결과가 양수일 경우에는 +를 붙이지 않는다.
let a2 = Number(prompt("시작 숫자"));
let b2 = Number(prompt("종료 숫자"));
var result3 = 0;
var result4 = "";

for(let i5 = a2; i5 <= b2; i5++){
    if(i5 % 2 === 1){
        result3 = result3 + i5;
        result4 = result4 + " + " + i5;
    } else {
        result3 = result3 - i5;
        result4 = result4 + " - " + i5;
    }
}

alert(result4 + " = " + result3);


// TODO : 1281
// 자연수 a, b 사이의 구간에 대해서 홀수는 더하고 짝수는 빼는 식을 보여준 후 결과를 출력하시오.
// 예)
// a=5, b=10 인 경우, 5-6+7-8+9-10=-3
// a=6, b=9 인 경우, -6+7-8+9=2
// 입력 : 두 자연수 a, b가 입력된다.
// 출력 : 홀수는 더하고 짝수는 뺀 식을 보여준후 결과를 출력한다.
// 식을 나열할때 양수인 경우 불필요하게 '+'를 붙여서 출력하지 않는다.
let a3 = Number(prompt("시작 숫자"));
let b3 = Number(prompt("종료 숫자"));
let result5 = 0;
let result6 = "";

for(let i6 = a3; i6 <= b3; i6++){
    if(i6 % 2 === 1){
        result5 = result5 + i6;
        if(i6 === a3){
            result6 = result6 + i6;
        } else{
        result6 = result6 + " + " + i6;
        }
    } else {
        result5 = result5 - i6;
        result6 = result6 + " - " + i6;
    }
}

alert(result6 + " = " + result5);


// TODO : 1282
// n 이 입력되면 k 를 빼서 제곱수를 만들 수 있는 k 를 구하고,
// 그 제곱수에 루트를 씌운 수(제곱근) t 를 구하여라.
// 이 때 k 는 여러가지가 될 수 있는데 가장 작은 k 를 출력한다.
// 입력 : n 이 입력된다. (0 < k < n <= 2 의 31 제곱)
// 출력 : k 와 t 를 출력한다. 이 때 k 는 여러가지가 될 수 있는데 가장 작은 k 를 출력한다.
// 입력 예시) 34
// 출력 예시) 9 5
let n6 = Number(prompt("자연수를 입력하세요."));
let k6 = 0;


for ( let t6 = n6 ; t6 > 0; t6--) {
    if (t6 * t6 < n6) {
        k6 = n6 - (t6 * t6);
        alert(k6 + " " + t6);
        break;
    }
}


// TODO : 1283
// gbs라는 개미 투자자가 주식에 투자하려고 합니다.
// 이 사람이 투자한 돈의 액수와, 그 주식의 하루간의 변동을 퍼센트로 알 때, 이 사람의 순수익과 이득/손해 판단을 출력하세요.
// 입력 : 첫째줄에 투자한 액수 a가 입력됩니다. (100 <= a <= 10,000)
//        둘째 줄에 투자 일 수 b가 입력됩니다.(1 <= b <= 10)
//        그 다음줄에 일별 변동폭인 데이터가 날짜 갯수(b개)만큼 퍼센트 정수로 입력됩니다. (변동폭는 음수도 될 수 있습니다.) ( 범위 -100 ~ +100)
// 출력 : 이 사람의 순수익(=총 수익(최종 값) - 총 비용(투자한 액수))을 소수점 첫째 자리에서 반올림하여 첫째 줄에 출력한다.
//        그리고 다음 줄에 이 사람이 이득일 경우 "good", 본전일 경우 "same",  손해일 경우 "bad"를 출력하세요. 
//        물론, 단위가 '원'인데, 0.4원 손해나 0.4원 이득은 없겠죠? (0.5원이면 반올림해서 1입니다 ^^)
//        만약 0.5>순수익>-0.5이면 순수익은 0으로 봅니다.
var money = Number(prompt("초기 투자금을 입력하세요"));
var date = Number(prompt("투자일수를 입력하세요"));
var change = prompt("변동비율을 공백으로 구분하여 입력하세요").split(" ").map(Number);
var x5 = money;

for(let j of change){
    x5 = x5 + (x * j * 0.01);
}

var y = x5 - money;

alert(Math.round(y));


if (y > 0) {
    alert("good");
} else if (y == 0) {
    alert("same");
} else {
    alert("bad");
}


// TODO : 1284
// 두 소수의 곱을 암호로 사용하는 알고리즘은 큰 수의 소인수분해가 어렵기 때문에 안전하다고 알려져있다.
// 그렇지만, 만약 두 소수를 잊어버리면 어떻게 될까? 굉장히 난감할 것이다.
// 이에 대비해 어떤 수(n)가 입력되면 두 소수의 곱으로 나타낼 수 있으면 두 소수를 오름차순으로 출력하고,
// 그렇지 않으면 "wrong number"를 출력하는 프로그램을 작성하시오.
// 입력 : 어떤 수 n이 입력된다.(단, 1<=n<=10,000,000)
// 출력 : n을 두 소수의 곱으로 나타낼 수 있으면 두 수를 오름차순으로 출력한다.
//       (단, 가능한 소수 중 가장 작은 소수와의 곱으로 나타낸다.)
//        하고, 그렇지 않으면 "wrong number"를 출력한다.
function isPrime(n) {
    for(let j=2; j<= n-1; j++) {
        if(n % j == 0) {
            return false;
        }
    }
    return true;
}

let x9 = Number(prompt("정수 1개 입력"));


let xResult = "";

for(let ii1=2; ii1<= x9; ii1++) {
    if ( x9 % ii1 == 0 && isPrime(ii1) == true ) {
        // 나눈 값이 소수이면 결과에 넣기
        if(isPrime(x9 / ii1)) {
            xResult = ii1 + " " + (x9 / ii1);
            break;
        } else {
            alert("소수가 아님");
        }
    }
}

alert(xResult);



// TODO : 1286
// 5 개의 정수들의 최댓값과 최솟값을 구하는 프로그램을 작성하라.
// 5 개의 정수가 한 줄에 하나씩 입력된다.(범위 : -1,000,000 ~ 1,000,000)
// 출력 : 첫째줄에 최댓값을 출력한다.
//        둘쨰줄에 최솟값을 출력한다.
let num1 = prompt("5 개의 정수를 입력하세요.\n 따옴표( , )로 구분 (범위 : -1,000,000 ~ 1,000,000)");
let arrayNum = num1.split(",");
let maxNum = "";
let minNum = "";

for(let num2 = 0; num2 < 5; num2++){
    maxNum = maxNum + arrayNum[num2];
    minNum = minNum + arrayNum[num2];
}

alert(Math.max.apply(null, arrayNum) + "\n" + Math.min.apply(null, arrayNum));



// TODO: 1294
// 대현이는 씨저의 암호 방식을 이용하여 문장을 만들려고 한다.
// never trust brutus 를 씨저의 암호로 바꾸면 qhyhu wuxvw euxwxv 이다.
// 그런데 집중력이 약한 대현이는 하나 하나 찾아서 암호로 바꾸는데 어려움을 겪고 있다.
// 우리가 대현이를 위해 평문을 씨저의 암호문으로 바꾸는 프로그램을 만들어주자.

var input = prompt();
var input1 = input.split("");
var result = 0;
var result2 = "";
var result3 = "";
for(let i=0; i<input.length; i++) {
    result = result + input[i].charCodeAt(0) + ",";
}
result = result.split(",").map(Number);
for(let i=0; i<result.length; i++) {
    if(result[i] == 32) {
        result[i] = 32
        result2 = result2 + result[i] + ",";
    } else if(result[i]==120){
        result[i] = 97
        result2 = result2 + result[i] + ","; 
    } else if(result[i]==121) {
        result[i] = 98
        result2 = result2 + result[i] + ",";
    } else if(result[i]==122) {
        result[i] = 99
        result2 = result2 + result[i] + ",";
    } else {
        result2 = result2 + (result[i]+3) + ",";
    }
}
result2 = result2.split(",");
for(let i=0; i<result2.length; i++) {
    result3 = result3 + String.fromCharCode(result2[i]);
}
console.log(result3);

// TODO: 1295
// 주어지는 문장의 대문자를 소문자로, 소문자를 대문자로 변경하는 프로그램을 작성하라.

var input = prompt().split("");
var result = "";
var result1 = "";
var result2 = "";
var result3 = "";
var result4 = "";
for(let i=0; i<input.length; i++) {
    result = result + input[i].charCodeAt() + ",";
}
result1 = result.split(",");
for(let i=0; i<result1.length; i++) {
      result1[i] = Number(result1[i])
    if(result1[i]>=65 && result1[i]<=90){
        result1[i] = result1[i] + 32
    } else if(result1[i]>=97 && result1[i]<=122){
        result1[i] = result1[i] - 32
    } 
    result2 = result2 + result1[i] + ",";   
}

result3 = result2.split(",");
for(let i=0; i<result3.length; i++){
   result4 = result4 + String.fromCharCode(result3[i]);
}
console.log(result4);




// TODO : 1675
// 암호학에서 시저 암호(Caesar cipher)는 가장 오래된 암호 중 하나이고, 가장 대표적인 대치(substitution) 암호로서 평문 문자를 다른 문자로 일대일 대응시켜 암호문을 만들어 낸다.
// 시저 암호는 알파벳을 3글자씩 밀려서 쓰면서 문장을 만들었다. 실제 시저는 부하인 브루투스에게 암살되기 전에 키케로에게 다음과 같은 암호문을 보냈다고 한다.
// 암호문을 원문으로 바꾸는 원리는 간단하다. 암호문에 쓰인 알파벳보다 3만큼 이동한 알파벳으로 치환하면 된다.
// 시저의 암호문이 입력되면 원문으로 복원하는 프로그램을 작성하시오.
// 입력 : 공백이 있는 영어 문자열이 최대 200글자 입력된다. 단, 공백과 알파벳 소문자외에 다른 문자는 입력되지 않는다.
// 출력 : 암호문을 원문으로 복원하여 출력하시오.

var s = prompt();    // input 값
    var nn = 3;          // 3칸 밀리는 값을 표현
    var lower = "abcdefghijklmnopqrstuvwxyz";   // 기준 표를 이렇게 나열해서 표현해봄 
    var answer= ''; // 정답
    var maxS = 200;
    

    for(var i =0; i < s.length; i++){    //첫번째 턴을 기준으로 설명
        var text = s[i];    // input 값에서 한글자씩 뽑는다.

        if(s.length > maxS) { // 글자수 200자 검사
          alert("글자수 제한 초과"); // 글자수 초과 시 출력 후 실행문 멈춤
          break;
        }


        if(text == ' ') {   // 공백이냐 아니냐 검사
            answer += ' ';  // 공백이면 똑같이 넣어줌
            continue;
        }
        
        var textArr = "";
        if(lower.includes(text) == true){   // 기준표(lower) 에서 내가 적은 값이 포함되었는지 검사 
            textArr = lower;    // 있다면? 배열을 abcd~z로 바꿔버린다.
        } else {
          // 대문자, 한글, 숫자가 들어왔을 경우 실행문 중지
          alert("지원하지 않는 문자");
          break;
        }

        var index = textArr.indexOf(text)+nn;    // 내가 적은 값이 기준표에서 몇번째인지 찾고, 그 값에 nn을 더한다 => 0 + 3 => 3 /4/5.. 이렇게 갈것임
                                                // textArr[i] === (text[i + nn]) 으로 textArr[0] 값이 a 일 때 text[0+3] 으로 d 값을 받아냄
        if(index >= textArr.length) 
        index -= textArr.length;    // 3이 기준표의 길이보다 긴지 검사한다. 
        answer += textArr[index];   // 기준표에서 index번째의 값을 정답에 하나씩 더한다.
        // answer = answer + textArr[3];    // 첫번째턴 answer = answer + (a 입력시 d 출력)
    }
    console.log("answer : " + answer);

// TODO : 1402
// 데이터의 개수가 n개가 들어오고, n개의 데이터를 거꾸로 출력하는 프로그램을 작성하시오.
// 입력예시 : 5
//           1 3 5 6 8
// 출력예시 : 8 6 5 3 1
var input1 = Number(prompt("입력할 갯수"));
var input2 = prompt("입력한 갯수만큼 숫자를 공백으로 구분하여 입력").split(" ");
var Rarray = input2.reverse();

var inResult = "";
for(let ii3 = 0; ii3 < input1; ii3++) {
    inResult = inResult + " " + input2[ii3];
}

alert(inResult);


// TODO : 1403
// k개의 숫자를 입력받고 그 숫자들을 두번 출력하시오.
// 입력 예시 : 
// 2
// 5 7
// 출력 예시 : 
// 5
// 7
// 5
// 7
var input1 = Number(prompt("입력할 갯수"));
var input2 = prompt("입력한 갯수만큼 숫자를 공백으로 구분하여 입력");
var array = input2.split(" ");
var inResult = "";
for (let ii4 = 0; ii4 < input1; ii4++) {
    for (let ii5 = 0; ii5 < array.length; ii5++) {
        inResult = inResult + "\n" + array[ii5];
    }
}

alert(inResult);



// TODO : 1405
// n개의 숫자가 입력되면, n개의 숫자를 왼쪽으로 하나씩 돌려서 출력하시오.
// 예) 1 2 3 4 5가 입력된 경우,
// 1 2 3 4 5
// 2 3 4 5 1
// 3 4 5 1 2
// 4 5 1 2 3
// 5 1 2 3 4


// TODO : 1407
// 길이(글자수)가 100이하인 문자열을 입력받아 공백을 제거하고 출력하시오.
// 입력 : 문자열이 입력된다.(글자 수는 100글자 이하이고, 알파벳 대소문자와 공백 문자만 입력된다.)
// 출력 : 공백을 제거한 후 출력한다.
var input1 = prompt("문자열 입력(알파벳 대소문자, 공백, 100글자 이하 입력가능)");
var arrayX = input1.split(" ");
var resultX = "";
var maxIn = 101;

for (let i = 0; i < arrayX.length; i++) {
    
    if (arrayX.length > maxIn){
        alert("글자수 초과");
        break;
    }
    resultX = resultX + arrayX[i];
}
alert(resultX);


// TODO : 1409
// 입력 : 첫째 줄에 숫자 10개가 차례대로 입력된다. 둘째 줄에 k값이 입력된다. 
// 출력 : k번째 숫자가 무엇이었는지 출력한다.
let in1 = prompt("공백으로 구분하여 숫자 10개 입력");
let index1 = Number(prompt("1 ~ 10"));
let arrayIn1 = in1.split(" ");
let resultIn1 = "";

for (let i = 0; i < in1.length; i++) {
    if (i === index1) {
        resultIn1 = resultIn1 + arrayIn1[i-1];
    }
    
}

alert(resultIn1);


// TODO : 1410
// 입력 : 괄호로 이루어진 문자열이 입력된다. (길이 100,000 이하)
// 출력 : 여는 괄호의 개수와 닫힌 괄호의 개수를 출력한다.
var input = prompt("소괄호 입력, 최대 100,000 이하");
var maxIn = 100000;
let open1 = "(";
let close1 = ")";
var result1 = 0;
var result2 = 0;

for (let i = 0; i < input.length; i++) {
    var text = input[i];
    if (open1.includes(text) === true){
        result1++; 
    } else if (close1.includes(text) === true) {
        result2++;
    }
}

alert(result1 + " " + result2);


// TODO : 1411
// 입력 : 첫 줄에는 한 장을 잃어버리기 전 카드의 전체 장수 N이 주어져 있다. 단 . 3 <= N <= 50 이다.
//        이어지는 N-1개의 각 줄에는 한 장이 빠진 카드 묶음의 카드 숫자가 하나씩 순서 없이 나열되어 있다.
// 출력 : 여러분은 주 어진 카드 묶음에서 빠진 하나의 카드를 찾아서 그 번호를 출력해야 한다.



// TODO : 1412
// 입력 : 90글자 이내의 영어로 된 문장이 입력된다.
//        이 문장은 영어 소문자, 공백 및 특수 문자로만 이루어져 있다.
// 출력 : a부터 z까지 사용된 알파벳 개수를 [입출력 예시]를 참고하여 출력한다.
//        특수문자와 공백의 개수는 출력하지 않는다.
function alphabet(eng) {
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let count = {};
  eng
    .toLowerCase()
    .split("")
    .forEach((char) => {
      if (alphabet.includes(char)) {
        if (count[char]) {
          count[char] += 1;
        } else {
          count[char] = 1;
        }
      }
    });
  return count;
}

let eng = prompt("");
let result = alphabet(eng);

for (let key in result) {
  if (result[key]) {
    console.log(key + " : " + result[key]);
  }
}

1416번 문제 - 박완수

// 어떤 10진수 n이 주어지면 2진수로 변환해서 출력하시오.

// 예)

// 10    ----->  1010

// 0    ----->  0

// 1    ----->  1

// 2    ----->  10

// 1024    ----->  10000000000
// 입력  10진수 정수 n이 입력된다.

// (n은 21억이하의 임의의 수이다.)

// 출력  2진수로 변환해서 출력한다.

let a = Number(prompt("10진수 입력"));

let result = a.toString(2);

console.log(result); 



1131

// 문제 설명
// 입력된 문자를 그대로 출력한다.

// 입력
// 문자 하나가 입력된다.

// 출력
// 입력받은문자를 그대로 출력된다.

let str = String(prompt("문자 입력"));

console.log(str);



1132

// 문제 설명
// 한 단어를 입력받아 출력한다.

// 입력
// 한 단어가 입력으로 주어진다.(단어 길이는 8글자 이하)

// 출력
// 입력받은 단어를 그대로 출력한다.

let str = String(prompt("문자 입력"));

console.log(str);


1133

// 문제 설명
// scanf("%s", str);를 사용하면 공백이후의 문자를 입력받지 못한다.

// 공백이 있는 문자열을 입력받아 출력해보자.

// 입력
// 공백이 포함된 문자열이 입력된다. (최대길이 30)

// 출력
// 입력받은 문자열을 그대로 출력한다.

// let str = String(prompt("문자 입력"));

// console.log(str);



1295

// 문제 설명
// 주어지는 문장의 대문자를 소문자로, 소문자를 대문자로 변경하는 프로그램을 작성하라.

// 입력
// 한 줄의 공백없는 문장이 입력된다.

// 출력
// 대소문자를 서로 변환한 결과를 출력한다.

let str = String(prompt("문자열 입력"));
let arr = []; 

for (let i = 0; i < str.length; i++) { 
	if (str[i] === str[i].toUpperCase()) { 
		arr.push(str[i].toLowerCase()); 
	} else { 
		arr.push(str[i].toUpperCase()); 
	}
}

arr.join("");

console.log(arr);


1406

// 문제 설명
// 영단어 하나가 입력된다.

// 그 단어가 love이면 I love you. 를 출력하시오.

// 입력
// 영어 단어 하나가 입력된다.

// 출력
// love가 입력되면 I love you.를 출력하시오. 만약 다른 단어가 입력되면 아무것도 출력하지 않는다.

let str = String(prompt("단어 입력"));

if (str === "love") { 
    console.log("I love you");
};


1418

// eclips로 작업

//문제 설명
//어떤 문자열이 있을 때 문자 t의 위치를 모두 찾아 출력하시오.

//입력
//공백이 없는 문자열이 한 줄 입력된다.(10글자 이하)

//출력
//소문자 t의 위치를 공백으로 분리하여 모두 출력하시오.

// import java.util.Scanner;

// public class Main {
// 	public static void main(String[] args) {
// 		Scanner sc = new Scanner(System.in);
// 		String a = sc.next();
// 		char[] b = a.toCharArray();

// 		for (int i = 0; i < b.length; i++) {
// 			if(b[i]== 't')System.out.print(i+1+" ");
// 		}
// 	}//main end 
// }


1733

// 문제 설명
// 정보 선생님은 프로젝트 그룹 
// ioi 를 매우 싫어 한다.

// 그 이유는 국제정보올림피아드(international olympiad in Informatics)의 이름과 동일해서,

// 인터넷 검색창에 
// 를 입력할 경우 더 이상 국제정보올림피아드에 대한 정보를 찾기가 힘들어 졌기 때문이다.

// 입력으로 
// IOI 가 입력될 경우, IOI is the International Olympiad in Informatics.를 출력하는 프로그램을 작성하시오.

// 만약 
// IOI 가 아닌 다른 글자가 들어오는 경우, I don't care.를 출력한다.

// let str = String(prompt("단어입력"));

// if ( str === "IOI") { 
//     console.log("IOI is the international Olympiad in Informatics");
// } else {
//     console.log("I don't care.")
// };



// 1734

// 문제 설명
// 당신은 웹사이트 제작자이다.

// ID를 입력하고 엔터를 누르면 환영 메시지를 띄우려고한다.

// 예를 들어 ID가 
//  인 경우, welcome! anaki를 출력한다.

// 환영 메시지를 출력하는 프로그램을 작성하시오.

// 입력
// ID를 입력한다.(ID는 10글자 미만 영문자이다.공백없음)

// 출력
// welcome! ID 형태로 출력한다.

let str = String(prompt("ID입력 (10자 미만 영문자 공백없음"));

console.log("Welcome! " + str)


1754

// 문제 설명
// 우리는 숫자를 int나 long long으로 숫자를 처리하였다.

// 이번엔 그보다 더 큰 숫자를 비교해보자.

// 최대 100자리의 두 숫자가 입력되면 작은수와 큰 수를 차례대로 출력하시오.

// let num1 = Number(prompt("첫번째 숫자 입력"));
// let num2 = Number(prompt("두번째 숫자 입력"));

// console.log(Math.max(num1, num2), Math.min(num1, num2));



// 1990

// 문제 설명
// 자연수 n이 입력되면 3의 배수인지 아닌지 판별하시오.


// 입력
// 자연수 n

// 출력
// 3의 배수이면 1을 출력하고, 아니면 0을 출력한다.

// let num = Number(prompt("숫자 입력"));

// if ( num % 3 == 0 ){
//     console.log(1)
// } else {
//     console.log(0)
// };


// 1620

// 문제 설명
// 어떤 수 n이 입력되면 n의 각 자릿수의 합이 한 자리가 될때까지 계산하여 출력하시오.

// 예) 1234567

// 1234567 → 1+2+3+4+5+6+7 = 28 → 2 + 8 = 10 → 1 + 0 = 1

// 입력
// 자연수 n이 입력된다.

// 출력
// 자릿수의 합이 한자리가 될때까지 계산하여 출력한다.

// let result = 0;
// let a = String(prompt("숫자 입력"));
// for ( let i = 0; i< a.length; i++) {
//     result += parseInt(a[i]);
// };
// console.log(result);