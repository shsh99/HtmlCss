// C_Exam.js : 자식 컴포넌트(연습문제)
// rfce
// TODO: 데이터 전달받아 아래와 같이 콘솔에 출력되었습니다.,
// TODO: 화면이 뜰때 자동 출력되었음 : console.log()
// 결과 : "From App"
//       "useEffect"
// import React from "react";
import { useEffect } from 'react';

function C_Exam(props) {

  useEffect(() => {
    console.log("props 값 : " + props.prop_value);
  }, []);
  return <div>C_Exam</div>;
}

export default C_Exam;
