import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Account.css";
import "./Login.css";

const Login = () => {
  const [idInputValue, setIdInputValue] = useState("");
  const [passwordInputValue, setPasswordInputValue] = useState("");

  const idChangeHandler = (e) => {
    setIdInputValue(e.target.value);
  };

  const passwordChangeHandler = (e) => {
    setPasswordInputValue(e.target.value);
  };

  return (
    <div className="account-page-wrapper">
      <form id="login-form" action="submit">
        <label className="account-form-title-label" htmlFor="login-form">
          Login
        </label>
        <input
          id="id-input"
          type="text"
          placeholder="아이디"
          value={idInputValue}
          onChange={idChangeHandler}
        />
        <input
          id="pw-input"
          type="password"
          placeholder="비밀번호"
          value={passwordInputValue}
          onChange={passwordChangeHandler}
        />
        <div id="login-detail-wrapper">
          <span className="signup">
            <Link to={"/signup"}>회원가입</Link>
          </span>
          <div id="find-wrapper">
            <span id="find-id">아이디 찾기</span>
            <span id="find-pw">비밀번호 찾기</span>
          </div>
          <div id="save-id-wrapper">
            <input id="save-id" type="checkbox"></input>
            <label htmlFor="save-id">아이디 저장</label>
          </div>
        </div>
        <button className="account-submit-button">로그인</button>
      </form>
    </div>
  );
};

export default Login;
