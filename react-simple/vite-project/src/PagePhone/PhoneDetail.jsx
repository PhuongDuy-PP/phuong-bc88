import React from 'react'

const PhoneDetail = ({ product, onClose }) => {
  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center'>
      <div className='relative'>
        <button
          className='absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-2xl'
          onClick={onClose}
        >x</button>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <img src={product.hinhAnh} alt={product.tenSP} />
          <div className='text-white'>
            <h3>Tên sản phẩm: {product.tenSP}</h3>
            <p>Giá bán: {product.giaBan}</p>
            <p>Màn hình: {product.manHinh}</p>
            <p>Hệ điều hành: {product.heDieuHanh}</p>
            <p>Camera trước: {product.cameraTruoc}</p>
            <p>Camera sau: {product.cameraSau}</p>
            <p>RAM: {product.ram}</p>
            <p>ROM: {product.rom}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PhoneDetail