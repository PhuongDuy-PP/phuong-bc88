import React, { useState } from 'react'

const UseStateEx2 = () => {
    const [name, setName] = useState('')

    const handleChange = (event) => {
        setName(event.target.value)
        // name = event.target.value
    }
  return (
    <div className='p-6 bg-white rounded-lg shadow-2xl'>
        <h2 className='text-xl font-bold mb-4 text-center'>Ví dụ 2: Form submit</h2>

        {/* form -> onSubmit 
            onSubmit:
                - ngăn chặn hành vi mặc định của form (reload trang)
                - lấy dữ liệu từ các input trong form
                - click nút submit
        */}
        <form 
            className='space-y-4'
        >
            <label className='block text-sm font-medium mb-1'> Tên của bạn</label>
            <input
                type="text"
                id='form-name'
                placeholder='Nhập tên của bạn'
                className='w-full p-3 border border-gray-600 rounded'
                onChange={handleChange}
            />
            <p className='text-lg mb-4'>
                Bạn đã nhập: <span className='font-bold'>{name}</span>
            </p>

        </form>
    </div>
  )
}

export default UseStateEx2