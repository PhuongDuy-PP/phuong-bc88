import React from 'react'

const ShoeModal = ({shoe}) => {
  return (
    <div className='p-4 bg-gray-300 rounded-lg border border-black mt-4'>
        <h2>Chi tiết sản phẩm</h2>
        <img src={shoe.imageUrl} alt={shoe.name} />
        <p className='text-lg font-bold'>Tên sản phẩm: {shoe.name}</p>
        <p className='text-lg font-bold'>Giá: {shoe.price} VND</p>
        <p className='text-lg font-bold'>Mô tả: {shoe.description}</p>
    </div>
  )
}

export default ShoeModal