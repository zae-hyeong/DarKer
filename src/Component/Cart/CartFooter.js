import React from 'react'
import './CartFooter.css'

const CartFooter = () => {
  return (
    <footer className='cart-footer'>
      <div className='cart-price-info'>

      <h2>가격 합계</h2>
      <p>￦1,000,000</p>
      </div>
      <button className='cart-purchase'>구매하기</button>
    </footer>
  )
}

export default CartFooter