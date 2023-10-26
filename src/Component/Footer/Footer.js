import React from "react";
import "./Footer.css";
import logo from "../../public/image/logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left-info">
        <h6 className="footer-info-title">Market Info</h6>
        <p className="footer-info-detail">
          상호명: (주) DarKer | 대표 : 박재형
          <br />
          주소 : 12345 서울특별자치시 북한산로 000-000
        </p>
        <h6 className="footer-info-title sec">Policy</h6>
        <p className="footer-info-detail">
          교환/반품 정책 확인 ▷<br />
          환불 정책 확인 ▷
        </p>
      </div>
      <div className="footer-center-info">
        <img src={logo} alt="footer logo" />
        <p className="footer-copyright">
          Copyright © DarKer All rights reserved. Hosting by ParkJaeHyeong
        </p>
      </div>
      <div className="footer-right-info">
        <h6 className="footer-info-title">CS CENTER</h6>
        <p className="footer-info-detail">1234-5678 (WEEK 10:00 ~ 17:00)</p>
        <h6 className="footer-info-title sec">Sailing Info</h6>
        <p className="footer-info-detail">
          통신판매업신고 : 2019-전주비빔밥-0202
          <br />
          사업자등록번호 : 123-45-67890
        </p>
      </div>
    </footer>
  );
};

export default Footer;
