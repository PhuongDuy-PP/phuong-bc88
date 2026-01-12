import React from 'react'

const EventHandlingEx2 = () => {
    const handleSubmit = (event) => {
        // ngăn chặn hành vi mặc định của form (reload trang)
        event.preventDefault()
        
        // lấy dữ liệu từ các input trong form
        const name = document.getElementById('form-name').value
        const email = document.getElementById('form-email').value

        // validation
        if(name === '' || email === '') {
            alert('Vui lòng nhập đầy đủ thông tin')
            return
        }

        // hiển thị message thông báo
        alert(`Cảm ơn ${name} đã đăng ký với email ${email}`)
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
            onSubmit={handleSubmit}
        >
            <label className='block text-sm font-medium mb-1'> Tên của bạn</label>
            <input
                type="text"
                id='form-name'
                placeholder='Nhập tên của bạn'
                className='w-full p-3 border border-gray-600 rounded'
            />

            <label className='block text-sm font-medium mb-1'>Email</label>
            <input
                type="email"
                id='form-email'
                placeholder='Nhập email của bạn'
                className='w-full p-3 border border-gray-600 rounded'
            />

            <button type='submit' className='w-full bg-blue-500 text-white p-3 rounded'>Submit</button>
        </form>
    </div>
  )
}

export default EventHandlingEx2