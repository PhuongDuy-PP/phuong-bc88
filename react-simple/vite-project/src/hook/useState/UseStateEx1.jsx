import React, { useState } from 'react'

const UseStateEx1 = () => {
// tạo state để handle count
    //  count: state, giá trị hiện tại dùng để re-render lại giao diện
    // setCount: function kiểm tra count, nếu count thay đổi value -> render lại component
    // setCount là tên hàm, không bắt buộc đặt đúng tên này. Nên đặt format này để hiểu
    // cách hoạt động của useState
    // các trường hợp dùng useState
    // TH1: call API
    // TH2: loading spinner
    // TH3: form input
    const [count, setCount] = useState(0)

    const handleIncrement = () => {
        // tăng giá trị count lên 1
        // LƯU Ý: không dùng trực tiếp count = count + 1
        setCount(count + 1)
        // count = count + 1
    }

    const handleDecrement = () => {
        setCount(count - 1)
    }

    const handleReset = () => {
        setCount(0)
    }

  return (
    <div className='p-6 bg-white rounded-2xl shadow-2xl'>
        <h2 className='text-2xl font-bold mb-4'>Event handling 1: thay đổi số đếm</h2>
        {/* hiển thị số đếm */}
        <p id="count-display" className='text-2xl font-bold text-center text-blue-600'>{count}</p>

        {/* hiển thị các nút: +  -  reset */}
        {/* để hiển thị các nút lên 1 hàng */}
        {/* bao 3 nút này vào div và dùng flex */}
        <div className='flex gap-3 justify-center'>
            <button
                className='bg-green-500 text-white px-6 py-3 rounded hover:bg-green-700'
                onClick={handleIncrement}
            >
                Tăng (+)
            </button>

            <button
                className='bg-red-400 text-white px-6 py-3 rounded hover:bg-red-600'
                onClick={handleDecrement}
            >
                Giảm (-)
            </button>

            <button
                className='bg-gray-400 text-white px-6 py-3 rounded hover:bg-gray-600'
                onClick={handleReset}
            >
                reset
            </button>
        </div>
    </div>
  )
}

export default UseStateEx1