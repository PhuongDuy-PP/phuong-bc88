import React from 'react'

// {
//         "maSP": 3,
//         "tenSP": "Iphone XS Max",
//         "manHinh": "OLED, 6.5, 1242 x 2688 Pixels",
//         "heDieuHanh": "iOS 12",
//         "cameraSau": "Chính 12 MP & Phụ 12 MP",
//         "cameraTruoc": "7 MP",
//         "ram": "4 GB",
//         "rom": "64 GB",
//         "giaBan": 27000000,
//         "hinhAnh": "/imgPhone/applephone.jpg"
//     }

const PhoneItem = ({product, showDetail, addToCart}) => {
  return (
    <div className='bg-white rounded-lg shadow-md p-4'>
        <img className='w-full h-48 object-cover' src={product.hinhAnh} alt={product.tenSP} />
        <div className='p-4 flex justify-center flex-col items-center'>
            <h3 className='text-lg font-bold mb-2'>{product.tenSP}</h3>
            <p className='mb-3'>{product.giaBan}</p>
            <button
                className='bg-blue-400 text-white p-4'
                // nếu function có 1 param => onClick={() => showDetail(product)}
                // nếu function không có param => onClick={showDetail}
                onClick={() => showDetail(product)}
            >Xem chi tiết</button>
            <button
              className='bg-green-400 text-white p-4'
              onClick={() => addToCart(product)}
            >Thêm vào giỏ</button>
        </div>
    </div>
  )
}

export default PhoneItem