import React, { useState } from "react";
import "./Account.css";
import "./Signup.css";

const Signup = () => {
  const [emailInputValue, setEmailInputValue] = useState("");
  const [idInputValue, setIdInputValue] = useState("");
  const [passwordInputValue, setPasswordInputValue] = useState("");
  const [passwordConfirmInputValue, setPasswordConfirmInputValue] =
    useState("");
  const [phoneNumberInputValue, setPhoneNumberInputValue] = useState("");

  const emailRegex = new RegExp("^([A-Za-z]|[0-9])+$");
  const phoneNumberRegex = new RegExp(
    "/^01([0|1|6|7|8|9]?)-?([0-9]{3,4})-?([0-9]{4})$/"
  );

  const emailInputHandler = (e) => {
    setEmailInputValue(e.target.value);
    if (!emailRegex.test(e.target.value)) {
      e.target.className = e.target.className + " deactive";
    } else {
      e.target.className = "";
    }
  };

  const idInputHandler = (e) => {
    setIdInputValue(e.target.value);
    if (e.target.value.length <= 5 && e.target.value.length > 0) {
      e.target.className = e.target.className + " deactive";
    } else {
      e.target.className = "";
    }
  };

  const passwordInputHandler = (e) => {
    setPasswordInputValue(e.target.value);
    if (e.target.value.length <= 5 && e.target.value.length > 0) {
      e.target.className = e.target.className + " deactive";
    } else {
      e.target.className = "";
    }
  };

  const passwordConfirmInputHandler = (e) => {
    setPasswordConfirmInputValue(e.target.value);
    if (e.target.value !== passwordInputValue) {
      e.target.className = e.target.className + " deactive";
    } else {
      e.target.className = "";
    }
  };

  const phoneNumberInputHandler = (e) => {
    setPhoneNumberInputValue(e.target.value);
    console.log(phoneNumberRegex.test(e.target.value));
    if (!phoneNumberRegex.test(e.target.value)) {
      e.target.className = e.target.className + " deactive";
    } else {
      e.target.className = "";
    }
  };

  return (
    <div className="account-page-wrapper">
      <form id="signup-form" action="submit">
        <label className="account-form-title-label" htmlFor="signup-form">
          Signup
        </label>
        <div className="signup-input-wrapper">
          <label htmlFor="email-id-input">이메일</label>
          <input
            id="email-input"
            type="text"
            placeholder="이메일"
            value={emailInputValue}
            onChange={emailInputHandler}
          />
        </div>
        <div className="signup-input-wrapper">
          <label htmlFor="signup-id-input">아이디</label>
          <input
            id="signup-id-input"
            className="essential-input-element"
            type="text"
            placeholder="아이디"
            value={idInputValue}
            onChange={idInputHandler}
          />
        </div>
        <div className="signup-input-wrapper">
          <label htmlFor="signup-pw-input">비밀번호</label>
          <input
            id="signup-pw-input"
            className="essential-input-element"
            type="password"
            placeholder="비밀번호"
            value={passwordInputValue}
            onChange={passwordInputHandler}
          />
        </div>
        <div className="signup-input-wrapper">
          <label htmlFor="signup-pw-confirm-input">비밀번호 확인</label>
          <input
            id="signup-pw-confirm-input"
            className="essential-input-element"
            type="password"
            placeholder="비밀번호 확인"
            value={passwordConfirmInputValue}
            onChange={passwordConfirmInputHandler}
          />
        </div>
        <div className="signup-input-wrapper">
          <label htmlFor="signup-phone-number-input">휴대전화</label>
          <input
            id="signup-phone-number-input"
            className="essential-input-element"
            type="text"
            placeholder="000-0000-0000"
            value={phoneNumberInputValue}
            onChange={phoneNumberInputHandler}
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
        <button className="account-submit-button">회원가입</button>
      </form>
    </div>
  );
};

export default Signup;
