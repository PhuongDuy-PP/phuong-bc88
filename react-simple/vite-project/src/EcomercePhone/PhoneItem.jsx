import React from 'react'

// {
//     "maSP": 1,
//     "tenSP": "VinSmart Live",
//     "manHinh": "AMOLED, 6.2, Full HD+",
//     "heDieuHanh": "Android 9.0 (Pie)",
//     "cameraTruoc": "20 MP",
//     "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP",
//     "ram": "4 GB",
//     "rom": "64 GB",
//     "giaBan": 5700000,
//     "hinhAnh": "/imgPhone/vsphone.jpg"
//   }
const PhoneItem = ({product, showDetail, addToCart}) => {
  return (
    <div className='bg-white rounded-lg shadow-md p-4'>
        <img className='w-full h-48 object-cover' src={product.hinhAnh} alt={product.tenSP} />
        <div className='p-4 flex justify-center flex-col items-center'>
            <h3 className='text-lg font-bold mb-2'>{product.tenSP}</h3>
            <p className='mb-3'>{product.giaBan}</p>
            <button
              className='bg-blue-400 text-white p-4 mb-3'
              // () => showDetail(product): đợi click event thì
              // mới call hàm showDetail

              // onClick={showDetail(product)}: SAI
              // Vì nó sẽ gọi hàm ngay lập tức

              // Trường hợp component con không có param
              // onClick={showDetail}
              onClick={() => showDetail(product)}
            >Xem chi tiết</button>
            <button
              className='bg-green-400 text-white p-4'
              onClick={() => addToCart(product)}
            >Thêm vào giỏ hàng</button>
        </div>
    </div>
  )
}

export default PhoneItem