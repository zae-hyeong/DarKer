import React from 'react'
import './CartHeader.css'
import rightArrow from "../../public/svg/right-arrow.svg";

const CartHeader = () => {
  return (
    <header className='cart-header'>
    <img className="close-header-close" src={rightArrow} alt="close aside" />
      <h2 className='cart-header-title'>장바구니</h2>

    </header>
  )
}

export default CartHeader