import React from 'react'
import './CartFooter.css'

const CartFooter = (props) => {
  return (
    <footer className='cart-footer'>
      <div className='cart-price-info'>

      <h2>가격 합계</h2>
      <p>￦{props.totalPrice}</p>
      </div>
      <button className='cart-purchase'>구매하기</button>
    </footer>
  )
}

export default CartFooter