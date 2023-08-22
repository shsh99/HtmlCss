// 문제 풀이
// 선택 함수
// img 선택
let cup = document.querySelector("#cup"); // img 태그

// 클릭 이벤트 함수
// js 선택함수 이용해서 태그에 접근가능 : img 태그 
// 태그의 모든 속성을 사용할 수 있음 : src, width, height, id, class 등
function chagePic() {
    // 이미지 바꾸기 코딩 : "./img/cup-1.png" -> "./img/cup-2.png"(파란컵)
    cup.src = "./img/cup-2.png"; // 파란컵
}