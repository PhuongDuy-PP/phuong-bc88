import React from 'react'

const PopupCart = ({listCart}) => {
  return (
    <div>
      <h2>Shopping cart</h2>
      <ul>
        {
          listCart.map((item) => {
            return (
              <li key={item.maSP}>{item.tenSP}</li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default PopupCart