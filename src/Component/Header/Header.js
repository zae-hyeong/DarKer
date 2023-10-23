import React from "react";
import "./Header.css";
import logo from "../../public/image/logo.png";
import menuIcon from "../../public/icon/hamburger-menu-icon.svg";

const Header = () => {
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
          <path d="M5 7H19" stroke="white" stroke-linecap="round" />
          <path d="M5 12H19" stroke="white" stroke-linecap="round" />
          <path d="M5 17H19" stroke="white" stroke-linecap="round" />
        </svg>
      </div>
      <div className="header-logo-wrapper">
        <a href="#">
          <img src={logo} alt="header logo" />
        </a>
      </div>
      <ul className="header-menu-list">
        <a href="#"><li className="header-menu-item">회원가입</li></a>
        <a href="#"><li className="header-menu-item">로그인</li></a>
        <a href="#"><li className="header-menu-item">주문조회</li></a>
      </ul>
    </header>
  );
};

export default Header;
