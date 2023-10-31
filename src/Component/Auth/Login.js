import React from "react";
import "./LoginSignup.css";

const Login = () => {
  return (
    <div className="login-wrapper">
      <form id="login-form" action="submit">
        <label className="login-form-label" htmlFor="login-form">Login</label>
        <input id="id-input" type="text" placeholder="아이디" />
        <input id="pw-input" type="password" placeholder="비밀번호" />
        <div id="login-detail">
          <span className="signup">회원가입</span>
          <div id="find-wrapper">
            <span id="find-id">아이디 찾기</span>
            <span id="find-pw">비밀번호 찾기</span>
          </div>
          <div id="save-id-wrapper">
            <input id="save-id" type="checkbox"></input>
            <label htmlFor="save-id">
              아이디 저장
            </label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
