import React from 'react'

const DataBindingEx1 = () => {

    // code function ở đây
    const handleChange = (event) => {
        const value = event.target.value

        // cập nhật lại text hiển thị
        // LƯU Ý: sau này sẽ dùng hook useState -> sẽ được học những phần sau
        document.getElementById('display-text').textContent = value
    }
  return (
    <div className='p-6 bg-white rounded-lg shadow-lg'>
        <h2 className='mb-4 font-bold text-xl'>Ví dụ 1: Input binding</h2>

        {/* dùng onChange thay vì oninput trong react */}
        {/* onChange trigger NGAY LẬP TỨC ngay khi user type text vào */}
        {/* VD: gõ 'A' -> onChange trigger -> 'AB' -> onChange trigger->.... */}
        {/* onChange support cho nhiều thẻ: input, select, checkbox, .... */}
        {/* oninput chỉ support 2 thẻ là input và textarea */}
        {/* truyền function vào onChange */}
        <input
            type="text"
            placeholder='Nhập tên của bạn'
            className='w-full p-3 border border-gray-400 rounded'
            onChange={handleChange}
        />

        <p className='text-lg font-bold' id="display-text"></p>
    </div>
  )
}

export default DataBindingEx1