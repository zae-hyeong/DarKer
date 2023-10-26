import React, { useState } from "react";
import "./Banner.css";
import bannerImg1 from "../../public/image/banner/banner-img1.jpg";
import bannerImg2 from "../../public/image/banner/banner-img2.jpg";
import bannerImg3 from "../../public/image/banner/banner-img3.jpg";
import bannerImg4 from "../../public/image/banner/banner-img4.jpg";
import bannerImg5 from "../../public/image/banner/banner-img5.jpg";
import BannerWindow from "./BannerWindow";

const Banner = () => {
  class BannerItem {
    constructor(id, img, comment) {
      this.bannerId = id;
      this.bannerImg = img;
      this.bannerComment = comment;
    }
  }

  const [bannerOrder, setBannerOrder] = useState(0);

  const banners = [
    new BannerItem("b1", bannerImg1, "어둠 속에서 가장 빛나는 DarKer"),
    new BannerItem("b2", bannerImg2, "어둡기에 빛나는 당신"),
    new BannerItem("b3", bannerImg3, "빛나는 순간을 위해"),
    new BannerItem("b4", bannerImg4, "특별하고 어두운 순간"),
    new BannerItem("b5", bannerImg5, "어두운, 아름다운"),
  ];

  const prevOrder = bannerOrder - 1 < 0 ? banners.length - 1 : bannerOrder - 1;
  const nextOrder = bannerOrder + 1 >= banners.length ? 0 : bannerOrder + 1;

  setTimeout(() => {
    setBannerOrder(nextOrder);
  }, 4000);

  return (
    <ul className="banner-list">
      <BannerWindow
        isActive={false}
        key={banners[prevOrder].bannerId}
        banner={banners[prevOrder]}
      />
      <BannerWindow
        isActive={true}
        key={banners[bannerOrder].bannerId}
        banner={banners[bannerOrder]}
      />
      <BannerWindow
        isActive={false}
        key={banners[nextOrder].bannerId}
        banner={banners[nextOrder]}
      />
    </ul>
  );
};

export default Banner;
