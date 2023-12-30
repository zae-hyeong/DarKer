import React, { useState } from "react";
import "./Account.css";
import "./Signup.css";

const Signup = () => {
  const [signupInputValue, setSignupInputValue] = useState({
    email: "",
    id: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
  });

  const [isFormValid, setIsFormValid] = useState(false);

  const emailRegex = new RegExp("^([A-Za-z]|[0-9])+$");
  const phoneNumberRegex = new RegExp(
    "(^01(0|1|6|7|8|9)-?([0-9]{3,4})-?([0-9]{4}))$"
  );

  const signupInputHandler = (e, identifier) => {
    setSignupInputValue((prevVal) => ({
      ...prevVal,
      [identifier]: e.target.value,
    }));

    if (identifier === "phoneNumber") {
      setSignupInputValue((prevVal) => ({
        ...prevVal,
        [identifier]: e.target.value
          .replace(/[^0-9]/g, "")
          .replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`),
      }));
    }

    if (e.target.value.length <= 0) {
      e.target.className = e.target.classList.add("deactive");
    } else {
      e.target.classList.remove("deactive");
    }

    switch (identifier) {
      case "email":
        if (emailRegex.test(e.target.value)) {
          e.target.classList.add("deactive");
          setIsFormValid(true);
        }
        return;
      case "id":
      case "password":
        if (e.target.value.length <= 5) {
          e.target.classList.add("deactive");
          setIsFormValid(true);
        }
        return;
      case "passwordConfirm":
        if (e.target.value !== signupInputValue.password) {
          e.target.classList.add("deactive");
          setIsFormValid(true);
        }
        return
      case "phoneNumber":
        if (phoneNumberRegex.test(e.target.value)) {
          e.target.classList.add("deactive");
          setIsFormValid(true);
        }
        return;
      default:
        e.target.classList.remove("deactive");
        setIsFormValid(true);
    }
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (isFormValid) {
      //TODO: form 제출
    } else {
      alert('Form Not Valid');
    }
  }

  return (
    <div className="account-page-wrapper">
      <form id="signup-form" action="submit" onSubmit={formSubmitHandler}>
        <label className="account-form-title-label" htmlFor="signup-form">
          Signup
        </label>
        <div className="signup-input-wrapper">
          <label htmlFor="email-id-input">이메일</label>
          <input
            id="email-input"
            type="text"
            placeholder="이메일"
            value={signupInputValue.email}
            onChange={(event) => {
              signupInputHandler(event, "email");
            }}
          />
        </div>
        <div className="signup-input-wrapper">
          <label htmlFor="signup-id-input">아이디</label>
          <input
            id="signup-id-input"
            className="essential-input-element"
            type="text"
            placeholder="아이디"
            value={signupInputValue.id}
            onChange={(event) => {
              signupInputHandler(event, "id");
            }}
          />
        </div>
        <div className="signup-input-wrapper">
          <label htmlFor="signup-pw-input">비밀번호</label>
          <input
            id="signup-pw-input"
            className="essential-input-element"
            type="password"
            placeholder="비밀번호"
            value={signupInputValue.password}
            onChange={(event) => {
              signupInputHandler(event, "password");
            }}
          />
        </div>
        <div className="signup-input-wrapper">
          <label htmlFor="signup-pw-confirm-input">비밀번호 확인</label>
          <input
            id="signup-pw-confirm-input"
            className="essential-input-element"
            type="password"
            placeholder="비밀번호 확인"
            value={signupInputValue.passwordConfirm}
            onChange={(event) => {
              signupInputHandler(event, "passwordConfirm");
            }}
          />
        </div>
        <div className="signup-input-wrapper">
          <label htmlFor="signup-phone-number-input">휴대전화</label>
          <input
            id="signup-phone-number-input"
            className="essential-input-element"
            type="text"
            maxLength={13}
            placeholder="000-0000-0000"
            value={signupInputValue.phoneNumber}
            onChange={(event) => {
              signupInputHandler(event, "phoneNumber");
            }}
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
