// C_Exam.js : 자식 컴포넌트
// rfce
// TODO: 연습문제
// TODO : 클릭시 아래 결과대로 코딩하세요
// TODO : 최초화면 : "안녕하세요"
// TODO : 결과 : "안녕"
import React from "react";
import { useState } from "react";

function C_Exam() {
  // TODO: 1) 바인딩 변수 정의
  // useState()
  // 바인딩 변수 : 리액트에서는 화면에서 수정이 일어났을때 정상적으로
  //             보이게 만들어 주는 변수
  // 사용법 : let [변수명, 수정함수] = useState("초기값")
  let [element, setElement] = useState("안녕하세요");

  // TODO: 2) myClick() 화살표 함수 : 안녕 으로 수정
  // nfn
  const myClick = () => {
    setElement("안녕");
  };
  return (
    <div>
      {element}
      <br />
      <button onClick={myClick}>문자열변경</button>
    </div>
  );
}

export default C_Exam;
