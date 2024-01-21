import React from "react";
import "./Header.css";
import { navActions } from "../../store/nav";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import logoImg from "../../public/image/logo.png";
import menuBtn from "../../public/svg/hamburger-button.svg";

const Header = () => {
  const navDispatch = useDispatch();

  const asideActiveHandler = () => {
    navDispatch(navActions.setAside());
  };

  return (
    <header className="header">
      <div className="header-menu-button">
        <object data={menuBtn} type="image/svg+xml">header menu button</object>
      </div>
      <div className="header-logo-wrapper">
        <Link at="">
          <img className="header-logo" src={logoImg} alt="header logo" />
        </Link>
      </div>
      <ul className="header-menu-list">
        <li className="header-menu-item">
          <Link to="signup">회원가입</Link>
        </li>
        <li className="header-menu-item">
          <Link to="login">로그인</Link>
        </li>
        <li className="header-menu-item" onClick={asideActiveHandler}>
          주문조회
        </li>
      </ul>
    </header>
  );
};

export default Header;