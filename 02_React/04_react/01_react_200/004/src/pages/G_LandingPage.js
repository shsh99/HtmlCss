// G_LandingPage.js : 자식(연습)
// rfce
import React, { useState } from "react";
// TODO : 연습문제
//  TODO : onClickLogout 함수는 클릭하면
//  TODO : isLoggedIn 변수의 값을 true -> false  로 변경한다.
//  TODO : onClickLogin 함수는 클릭하면
//  TODO : isLoggedIn 변수의 값을 false -> true 로 변경한다.
// TODO: 아래 코딩하세요 부분을 코드 완성하세요

function G_LandingPage() {
  // TODO: 변수 정의
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // TODO: 함수 정의
  // nfn
  const onClickLogin = () => {
    // TODO: 아래 코딩하세요
    // isLoggedIn 변수의 값을 false -> true 로 변경한다.
    setIsLoggedIn(true);
  };
  // nfn
  const onClickLogout = () => {
    // TODO: 아래 코딩하세요
    // isLoggedIn 변수의 값을 true -> false 로 변경한다.
    setIsLoggedIn(false);
  };

  return (
    <div>
      {isLoggedIn === true ? (
        <button onClick={onClickLogout}>로그아웃</button>
      ) : (
        <button onClick={onClickLogin}>로그인</button>
      )}
    </div>
  );
}

export default G_LandingPage;
