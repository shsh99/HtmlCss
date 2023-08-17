// 문제 풀이
// 1) 입력된 단어를 입력된 횟수만큼 반복해 출력하세요
//  입력 1 : love
//  입력 2 : 3
//  출력 : lovelovelove
//  입력함수 : let char = prompt("1개의 문자열이 입력된다.");
//            let num = Number(prompt("1개의 숫자가 입력된다."));
// TODO: 3) 문자열 붙이기 사용 (단어 3개 붙이기)
// let char1 = prompt("1개의 문자열이 입력된다."); // love
// let num = Number(prompt("1개의 숫자가 입력된다.")); // 3
// let strCount = ""; // 문자열 붙이기 변수 초기화

// num = 3 있는 상태
// for(let i=0; i< num; i++) {
// 문자열 붙이기 코드
// i=0 일때 0< 3 (참) strCount = "" + "love"("love")
// i=1 일때 1< 3 (참) strCount = "love" + "love"("lovelove")
// ...
//     strCount = strCount + char1; // char1 = "love"
// }
// console.log(strCount); // 최종 결과 출력

// 2) 입력 : 없음
//    출력 : "!@#$%^&*()"
// 문자열 : "", '' 2 개 모두 사용가능
// alert('"!@#$%^&*()"');

// 3) 입력 : 없음
//    출력 : "C:\Download\hello.cpp"
// 힌트 : 특수문자 출력방법 : \\
// alert("C:\\Download\\hello.cpp");

// 4) 입력 : 1.414213
//    출력 : 1.414213
// let num = Number(prompt("소수점 숫자를 입력하세요."));
// alert(num);

// 5) 입력 : 1.59254
//    출력 : 1.59
//    힌트 : 소수점 자르기 함수 - 숫자.toFixed(자를 자리 수)
// let num = Number(prompt("소수점 숫자를 입력하세요."));
// alert(num.toFixed(3,4,5));
// 6) 입력 : 125
//    출력 : 125 125 125
// let num = Number(prompt("숫자를 입력하세요."));
// alert(num + " " + num + " " + num);

// 자료형 : 배열 (간략설명)
// 자료형 : 문자열(string), 숫자(number), 참/거짓(boolean/bool)
//          배열
// 변수 : 변하는 값을 저장하는 장소(1가지 값만 저장함) , let 변수명
// 배열 : 여러가지 값을 저장하는 장소, 변수명 동일하게 사용
//        인덱스번호
// 사용법 : 변수명[인덱스번호]
// 보충설명 : a[0] == 0번방에 값, a[1] == 1번방에 값이 들어가 있음
// 예) a[0] = 1, a[1] = 2, ....

// 예제 7) 입력 = 1 2
//         출력 = 1 2
// 자바스크립트에서 문자열 자르기 함수 : 문자열.split(자를 문자);
// 예) let arr - prompt("두 정수를 입력해 주세요").split(" ");
// arr(배열), arr[0] = 1, arr[1] = 2;
// alert(arr[1], arr[0]);

// 7) 입력 : A b
//    출력 : b A
// let arr = prompt("문자를 입력하세용가리").split(" ");
// alert(arr[1] + " " + arr[0]);

// 8) 입력 3:16
//    출력 3:16
// let arr = prompt("두 정수를 입력해 주세요");
// alert(arr);

// 9) 입력 2013.8.5
//    출력 2013.08.05
// 문자열 자르기 함수 split 사용
// let num = prompt("두 정수를 입력해 주세요").split(".");
// let year = num[0];
// let month = ".0"+ num[1];
// let day = ".0"+ num[2];

// alert(year + month + day);

// 10) 입력 : 000907-1121112
//     출력 : 0009071121112
// let num = prompt("두 정수를 입력해 주세요").split("-");
// let first = num[0];
// let second = num[1];

// alert(first + second);

// 11) 입력 : Programming is very fun!!
//     출력 : Programming is very fun!!

// let arr = prompt("");
// alert(arr)

// 12) 입력 : 1.414213
//     출력 : 1

// let num = prompt("두 정수를 입력해 주세요").split(".");
// let first = num[0];
// let second = num[1];
// alert(first)

// 13) 입력 : Boy
//     출력 : 'B'
//            'o'
//            'y'
// 힌트 : Boy (문자열) : 1문자의 합 == 문자들의 배열
//      let arr = "Boy" -> arr[0] = "B", arr[1] = "o", arr[2] = "y";

// let arr = prompt("입력해 주세요");
// arr1 = "'" + arr[0] + "'" + "\n";
// arr2 = "'" + arr[1] + "'" + "\n";
// arr3 = "'" + arr[2] + "'";
// alert(arr1 + arr2 + arr3);

// 14) 두 정수의 합을 출력한다.
// 입력 1 : 1231313
// 입력 2 : 1232131
//   출력 : 23112313

// let num = Number(prompt("숫자를 입력하세요"));
// let num1 = Number(prompt("숫자를 입력하세요"));

// alert(num + num1);

// 15) 입력 : 75254 
//           숫자문자열 : "75254"
//               "75254" == "7" + "5" + "2" + "5" + "4"
//                       배열[0] + 배열[1] ... + 배열[4]
//     let aaa = "75254";
//        aaa[0] == "7";
//        aaa[1] == "5";
//        alert(aaa[3]) // 5
//     출력 : [70000]
//            [5000]
//            [200]
//            [50]
//            [4]

// let num = prompt("숫자를 입력하세요.");
// a1 = "[" + num[0]+ "0000] \n";
// a2 = "[" + num[1]+ "000] \n";
// a3 = "[" + num[2]+ "00] \n";
// a4 = "[" + num[3]+ "0] \n";
// a5 = "[" + num[4]+ "]";

// alert(a1 + a2 + a3 + a4 + a5);