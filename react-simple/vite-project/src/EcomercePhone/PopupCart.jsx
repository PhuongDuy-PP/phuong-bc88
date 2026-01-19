import React from 'react'

const PopupCart = ({cartList}) => {
  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cartList.map(item => (
          <li key={item.maSP}>{item.tenSP}</li>
        ))}
      </ul>
    </div>
  )
}

export default PopupCart