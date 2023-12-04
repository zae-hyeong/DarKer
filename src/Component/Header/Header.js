import React from "react";
import "./Header.css";

const Header = (props) => {
  const navSelectHandler = (e) => {
    console.log(`eee: ${e.target.className}, ddd : ${e.target.value}`);
    props.onNavSelect(e.target.value);
  };

  const asideActiveHandler = ()=> {
    props.onAsideActive((isActive) => !isActive)
  };

  return (
    <header className="header">
      <div className="header-menu-button">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M5 7H19" stroke="white" strokeLinecap="round" />
          <path d="M5 12H19" stroke="white" strokeLinecap="round" />
          <path d="M5 17H19" stroke="white" strokeLinecap="round" />
        </svg>
      </div>
      <div className="header-logo-wrapper">
        <input
          className="header-logo"
          type="button"
          value={1}
          onClick={navSelectHandler}
        />
      </div>
      <ul className="header-menu-list">
        <li value={3} className="header-menu-item" onClick={navSelectHandler}>
          회원가입
        </li>
        <li value={2} className="header-menu-item" onClick={navSelectHandler}>
          로그인
        </li>
        <li className="header-menu-item" onClick={asideActiveHandler}>
          주문조회
        </li>
      </ul>
    </header>
  );
};

export default Header;
