// 문제 
// 1) 증감연산자를 활용해서 화면 출력하세요
// 입력 없음
// 출력 10, 11, 12
// let x = 10;
// alert(x)
// x++;
// alert(x)
// x++;
// alert(x)
// console.log('10\n 11\n 12');

// 2)  공식 : price(개당가격) = 1500, num(구매개수) = 3, pay(지불금액) 10000
// 잔돈 계산 공식 = pay - price * num;
// 출력 : 개당 가격 1500원
//        구매개수 : 3개
//        지불 금액 = 10000원
//        거스름돈 5500원 입니다.

// let num = 3;
// let price = 1500;
// let pay = 10000;
// let change = pay - price * num;

// alert('- 개당 가격 : ' + price + '원');
// alert('- 구매 개수 : ' + num + '개');
// alert('- 지불 금액 : ' + pay + '원');
// alert('- 거스름 돈 : ' + change + '원 입니다.');
// console.log("- 개당 가격 : " + price + "원");
// console.log("- 구매 개수 : " + num + "개");
// console.log("- 지불 금액 : " + pay + "원");
// console.log("- 거스름 돈 : " + (pay - (price * num)) + "원 입니다.");

// 3) 입력함수 : prompt() 이용해서 입력받기
// 아래 코딩을 완성하세요
// 입력 1 : a
// 입력 2 : b
// 출력 : b a 
// 사용법 : let 변수명 = prompt("문자열"); // 문자열(입력대화상자의 문구)
// 입력받은 글자가 변수명에 저장된다.
// let char1 = prompt("1개의 문자가 입력된다."); // a
// let char2 = prompt("1개의 문자가 입력된다."); // b
// alert(char2 + " " + char1);

// 4) 입력받은 정수를 줄을 바꿔 3번 출력한다.
// 단 줄바꿈 특수문자를 사용해서 한번에 출력하라.
// 입력 : 3
// 출력 : 3
//        3
//        3
// let char1 = prompt("숫자입력");
// alert(char1 + "\n" + char1 + "\n" + char1);

// 5) 단어 2개가 입력된다. 2개를 거꾸로 붙여서 출력하시오.
// 입력 1 : hello
// 입력 2 : world 
// 출력 : worldhello
// let char1 = prompt("단어 2개를 입력하시오");
// let char2 = prompt("단어 2개를 입력하시오");
// alert(char2 + char1);

// 6) 입력 1: hello
// 입력 2: world
// 출력 : hello
//        world
// let char1 = prompt("단어 2개를 입력하시오");
// let char2 = prompt("단어 2개를 입력하시오");
// alert(char1 +"\n"+ char2);

// 7) 두 정수의 합을 출력하세요
// 입력 1 : 123
// 입력 2 : -123
// 출력 : 0

let num1 = Number(prompt("숫자를 입력하세요"));
let num2 = Number(prompt("숫자를 입력하세요"));
alert(num1 + num2)