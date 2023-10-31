import React from "react";
import "./LoginSignup.css";

const Signup = () => {
  return (
    <div className="signup-wrapper">
      <form id="signup-form" action="submit">
        <label className="signup-form-label" htmlFor="signup-form">
          Signup
        </label>
        <div className="signup-input-wrapper">
          <label htmlFor="signup-id-input">아이디</label>
          <input
            id="signup-id-input"
            className="essential-input-element"
            type="text"
            placeholder="아이디"
          />
        </div>
        <div className="signup-input-wrapper">
          <label htmlFor="signup-pw-input">비밀번호</label>
          <input
            id="signup-pw-input"
            className="essential-input-element"
            type="password"
            placeholder="비밀번호"
          />
        </div>
        <div className="signup-input-wrapper">
          <label htmlFor="signup-pw-confirm-input">비밀번호 확인</label>
          <input
            id="signup-pw-confirm-input"
            className="essential-input-element"
            type="password"
            placeholder="비밀번호 확인"
          />
        </div>
        <div className="signup-input-wrapper">
          <label htmlFor="signup-phone-number-input">휴대전화</label>
          <input
            id="signup-phone-number-input"
            className="essential-input-element"
            type="password"
            placeholder="000-0000-0000"
          />
        </div>
        <div id="signup-detail">
          <div id="personal-info-agree-wrapper">
            <label htmlFor="personal-info-agree">개인정보처리방침 동의</label>
            <input id="personal-info-agree" type="checkbox"></input>
          </div>
          <div id="user-agreements-wrapper">
            <label htmlFor="user-agreements">이용약관 동의</label>
            <input id="user-agreements" type="checkbox"></input>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signup;
