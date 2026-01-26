import React, { useState } from 'react'
import * as yup from 'yup'

const PhoneForm = () => {
    // tạo schema yup để validate
    const phoneSchema = yup.object().shape({
        name: yup.string().required("Tên điện thoại là bắt buộc"),
        price: yup.number()
                .required("Giá điện thoại là bắt buộc")
                .positive("Giá phải là số dương"),
        screen: yup.string().required("Màn hình là bắt buộc")
    })

    const [formData, setFormData] = useState({
        name: '',
        price: '',
        screen: ''
    })

    const [formErrors, setFormErrors] = useState({})

    const handleSubmit = (e) => {
        e.preventDefault()
        validationForm()
    }

    const handleChange = (e) => {
        const {name, value} = e.target

        setFormData({
            ...formData,
            [name]: value
        })
        console.log(formData)

        // console.log(name, value)
    }

    // validate form
    const validationForm = async () => {
        try {
            await phoneSchema.validate(formData, {abortEarly: false})
            setFormErrors({})
            return true
        } catch (error) {
            // yup sẽ lưu các lỗi vào trong inner
            // inner là một mảng chứa tất cả các lỗi
            console.log(error.inner)
            let errors = {}
            error.inner.forEach((error) => {
                console.log(error.path, error.message)
                errors[error.path] = error.message
            })
            setFormErrors(errors)
            return false
        }
    }

    return (
        <div className='bg-white rounded-lg shadow-lg p-6 mb-6'>
            <div className='flex justify-between items-center mb-4'>
                <h2>Thêm mới điện thoại</h2>
                <button className='bg-blue-500 text-white rounded-md px-4 py-2'>Thêm mới</button>
            </div>

            {/* hiển thị lỗi từ API */}
            <div className='p-3 bg-red-100 border border-red-400 text-red-700 rounded'>
                Lỗi
            </div>

            <form onSubmit={handleSubmit} className='bg-gray-50 rounded-lg p-4 mb-4'>
                <div className='grid grid-cols-2 gap-4 mb-4'>
                    {/* Tên điện thoại */}
                    <div>
                        <label className='block mb-1' >Tên điện thoại</label>
                        <input
                            type="text"
                            name='name'
                            value={formData.name}
                            onChange={handleChange}
                            className='w-full border rounded-lg px-3 py-2'
                        />
                        <p className='text-red-500 mt-1'></p>
                    </div>

                    {/* Giá điện thoại */}
                    <div>
                        <label className='block mb-1' >Giá điện thoại</label>
                        <input
                            type="text"
                            name='price'
                            value={formData.price}
                            onChange={handleChange}
                            className='w-full border rounded-lg px-3 py-2'
                        />
                        <p className='text-red-500 mt-1'></p>
                    </div>

                    {/* Màn hình */}
                    <div>
                        <label className='block mb-1' >Màn hình</label>
                        <input
                            type="text"
                            name='screen'
                            value={formData.screen}
                            onChange={handleChange}
                            className='w-full border rounded-lg px-3 py-2'
                        />
                        <p className='text-red-500 mt-1'></p>
                    </div>

                    {/* button thêm mới */}
                    <div className='col-span-2'>
                        <button type='submit' className='bg-blue-500 text-white rounded-md px-4 py-2'>Thêm mới</button>
                    </div>

                </div>

            </form>
        </div>
    )
}

export default PhoneForm