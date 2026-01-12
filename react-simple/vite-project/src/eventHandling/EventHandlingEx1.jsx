import React from 'react'

const EventHandlingEx1 = () => {
    let count = 0;

    const handleIncrement = () => {
        // DOM tới nơi hiển thị số đếm -> count-display
        const countElement = document.getElementById('count-display');
        // tăng giá trị count lên 1
        count++

        // render count ra count-display
        countElement.textContent = count
    }

    const handleDecrement = () => {
        // DOM tới nơi hiển thị số đếm -> count-display
        const countElement = document.getElementById('count-display');
        // giảm giá trị count xuống 1
        count--

        // render count ra count-display
        countElement.textContent = count
    }

    const handleReset = () => {
        // DOM tới nơi hiển thị số đếm -> count-display
        const countElement = document.getElementById('count-display');
        // reset về 0
        count = 0

        // render count ra count-display
        countElement.textContent = count
    }

  return (
    <div className='p-6 bg-white rounded-2xl shadow-2xl'>
        <h2 className='text-2xl font-bold mb-4'>Event handling 1: thay đổi số đếm</h2>
        {/* hiển thị số đếm */}
        <p id="count-display" className='text-2xl font-bold text-center text-blue-600'>0</p>

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

export default EventHandlingEx1