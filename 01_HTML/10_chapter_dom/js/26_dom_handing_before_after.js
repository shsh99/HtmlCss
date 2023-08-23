// TODO : 선택 태그 앞/뒤 추가
// 선택 함수 : li 태그 중 class=two 인 것
// 사용법 : document.querySelector(css 선택자)

// 1) 선택한 태그
let liTag = document.querySelector(".two");

// 2) 이동할 태그
let movingTag = document.querySelector(".movingTag");

// TODO : 선택한 요소(태그) 의 앞에 추가 : 문자열, 태그  모두 이동 가능
// TODO 사용법 : 태그.before(이동할 태그)
liTag.before(movingTag);

// TODO : 선택한 요소(태그) 의 뒤에 추가 : 문자열, 태그  모두 이동 가능
// TODO 사용법 : 태그.after(이동할 태그)
liTag.after(movingTag);

// TODO 자바스크립트 특징 : 스크립트 언어, line by line으로 실행됨(컴파일 없음)
// line by line 으로 실행 : 1라인을 읽으면 문법 해석 -> 바로 실행
// 컴파일 언어 vs 스크립트 언어 속도 차이  = 컴파일 언어가 빠름
                                        // (컴파일 시점에 미리 문법을 해석함) -> 바로 실행

                                        