// 연습문제 풀이
// 함수 정의
// get_pay(25000, 10, 5000) : 함수 사용
function get_pay(price, discount, shipping) {
    // pay(지불금액) = price(책값) - (price(책값) * (discount(할인율)/100)) + shipping(배송료)
        let pay = price - (price * (discount/100)) + shipping; // 지불금액
    
        // 각각 웹 화면에 출력하기
        // 선택함수 이용
        document.querySelector("#price").innerHTML = price + "원"; // 25000
        document.querySelector("#discount").innerHTML = discount + "%"; // 10
        document.querySelector("#shipping").innerHTML = shipping + "원"; // 5000
        document.querySelector("#pay").innerHTML = pay + "원"; // 
    }