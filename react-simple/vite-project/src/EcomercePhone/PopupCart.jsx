import React from 'react'
import ListCar from '../hook/props/CarPage/ListCar'

const PopupCart = ({ cartList, onCloseCart, onChangeQuantity, countItemCart }) => {
  // c1: hàm reduce
  const totalPrice = cartList.reduce((sum, item) => sum + item.giaBan * item.quantity, 0)
  // C2: dùng for để duyệt từng item trong mảng
  let totalPrice2 = 0
  for(let i = 0; i < cartList.length; i++) {
    const item = cartList[i]
    totalPrice2 += item.giaBan * item.quantity
  }
  return (
    // lớp nền mờ phủ full màn hình
    <div className='fixed inset-0 bg-black/50 z-50 flex justify-center items-center px-4'>
      {/* khung modal */}
      <div className='bg-white rounded-2xl shadow-2xl  w-full max-w-2xl relative'>
        {/* header modal */}
        <div className='flex justify-between items-center px-6 py-4 border-b'>
          <h3 className='text-sm text-gray-500'>Giỏ hàng</h3>
          <p>Cart ({countItemCart})</p>
        </div>
        <button
          className='text-2xl text-gray-500 hover:text-gray-700 absolute top-4 right-4'
          onClick={onCloseCart}
        >x</button>

        {/* thân modal */}
        <div className='px-6 py-4 max-h-[60vh] space-y-3 overflow-y-auto'>
          {/* nếu listCart.length ==0 => giỏ hàng trống */}
          {/* listCart/length > 0 => render các cart */}
          {/* toán tử ba ngôi */}
          {
            cartList.length === 0 ? (
              <p className='text-center text-gray-500'>Chưa có sản phẩm nào</p>
            ) : (
              cartList.map((item) => {
                return (
                  <div key={item.maSP} className='flex items-center gap-4 border rounded-2xl p-4'>
                    <img className='w-16 h-16 object-cover rounded-lg' src={item.hinhAnh} alt={item.tenSP} />
                    <div>
                      <p>{item.tenSP}</p>
                      <p>{item.giaBan}</p>
                    </div>

                    <div className='flex items-center gap-2'>
                      <button
                        className='w-8 h-8 flex justify-center items-center rounded-xl bg-gray-400'
                        onClick={() => onChangeQuantity(item.maSP, -1)}
                      >-</button>
                      <span>{item.quantity}</span>
                      <button
                        className='w-8 h-8 flex justify-center items-center rounded-xl bg-gray-400'
                        onClick={() => onChangeQuantity(item.maSP, 1)}
                      >+</button>
                    </div>
                  </div>
                )
              })
            )
          }
        </div>

        {/* footer modal: tạm tính + button đóng */}
        <div className='px-6 py-4 border-t flex item-center justify-between'>
          <div>
            <span className='text-gray-500'>Tạm tính:</span>
            <span className='font-semibold'>{totalPrice.toLocaleString('vi-VN')} đ</span>
          </div>
          <button 
            className='bg-blue-600 hover:bg-blue-800 text-white px-4 py-2 rounded-lg'
            onClick={onCloseCart}
          >
            Đóng
          </button>

        </div>
      </div>


    </div>
  )
}

export default PopupCart