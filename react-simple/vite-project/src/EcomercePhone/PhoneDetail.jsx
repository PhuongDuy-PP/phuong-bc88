import React from 'react'

const PhoneDetail = ({product, onClose}) => {
  return (
    <div 
      className='fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center'
    >
        <div className='relative'>
          <button
            className='absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-2xl'
            onClick={onClose}
          >x</button>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <img src={product.hinhAnh} alt={product.tenSP} className='w-full h-48 rounded' />
            <div>
              <h3>{product.tenSP}</h3>
              <p>{product.giaBan}</p>
              <p>{product.manHinh}</p>
              <p>{product.heDieuHanh}</p>
              <p>{product.cameraTruoc}</p>
              <p>{product.cameraSau}</p>
              <p>{product.ram}</p>
              <p>{product.rom}</p>
            </div>
            <button className='bg-green-400 text-white p-4'>Thêm vào giỏ hàng</button>
          </div>

        </div>
    </div>
  )
}

export default PhoneDetail