import React from 'react'

const BannerWindow = (props) => {
  return (
    <li className={props.isActive ? 'banner-item active' : 'banner-item'} key={props.banner.bannerId}>
      <img src={props.banner.bannerImg} alt="banner" />
      <p>{props.banner.bannerComment}</p>
    </li>
  )
}

export default BannerWindow