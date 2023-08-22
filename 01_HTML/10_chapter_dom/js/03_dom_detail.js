// DOM : Document Object Model, html 문서(태그 등이 있음)
// html 웹 문서 동장
// 1) 컴퓨터 웹브라우저에 html 문서를 읽어들임(파싱: 문법 해석)
// 2) 파싱된 문서(DOM) -> 메모리에 저장(DOM 저장됨)
// 파싱된 문서(DOM) : 트리구조(자료구조)
// 예) html 현재 문서(03_dom_detail.html)
//          window(최상위 부모 객체 : html 문서, 주소창, 메뉴, 상태바 등)
//             |
//         document(객체, html 문서)
//             |
//            html(태그)
//             |
//   -------------------------------------
//   |                                   |
// head(태그)                           body(태그)
//                                       |
//                     -----------------------------------------
//                     |                                       |
//     div style="backgroundColor= 'aqua'"      script src="./js/03_dom_detail.js"
//                     |                                       |
//             "안녕하세요"(텍스트, == innerHTML속성)
// TODO : html 문서(DOM) 특징 : 태그(tag), 속성(attribute), 텍스트(text), 주석(comment)
// TODO : 태그, 속성, 텍스트, 주석 별로 구분해서 트리구조로 메모리에 저장된다.
// TODO : 위의 그림이 DOM을 시각화 한 것
// TODO : DOM 접근(선택) 함수 : querySelector(css선택자)
