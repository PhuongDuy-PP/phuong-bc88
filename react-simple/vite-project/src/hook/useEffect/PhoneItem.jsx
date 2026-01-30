import axios from 'axios'
import React, { useEffect, useState } from 'react'

const PhoneItem = ({ phone, onRefresh }) => {
    const API_URL = "https://696e19dcd7bacd2dd715bfcf.mockapi.io/api/v1/phone"

    const [phoneDetail, setPhoneDetail] = useState(null)
    // dùng api get detail để nhận dữ liệu về từ backend
    useEffect(() => {
        axios.get(`${API_URL}/${phone.id}`)
            .then((response) => {
                console.log('Phone detail:', response.data)
                setPhoneDetail(response.data)
            })
            .catch()
            .finally()
    }, [phone.id])

    const handleDelete = () => {
        // confirm trước khi xóa
        const confirmDelete = window.confirm("Bạn có chắc chắn muốn xóa điện thoại này không?")

        // nếu người dùng không xác nhận => stop
        if(!confirmDelete) {
            return
        }

        // call API xóa điện thoại
        axios.delete(`${API_URL}/${phone.id}`)
            .then(() => {
                // alert thông báo xóa thành công
                alert("Xóa điện thoại thành công!")

                onRefresh()
            })
            .catch((err) => {
                alert("Xóa điện thoại thất bại! " + err.message)
            })
            .finally()
    }

    return (
        <>
            {
                phoneDetail && (
                    <div className='border rounded-lg p-4 hover:shadow-lg'>
                        {/* nếu không có img => hiển thị default img */}
                        {
                            phoneDetail.img && (
                                <img
                                    src={phoneDetail.img}
                                    alt={phoneDetail.name}
                                    className='w-full h-48 object-cover rounded-lg mb-3'
                                    onError={(err) => {
                                        // err.target.src = 'https://via.placeholder.com/150'
                                    }}
                                />
                            )
                        }

                        <h4>{phoneDetail.name}</h4>
                        <p>{phoneDetail.price}</p>
                        <p>Màn hình: {phoneDetail.screen}</p>
                        <p>Camera sau: {phoneDetail.backCamera}</p>
                        <p>Camera trước: {phoneDetail.frontCamera}</p>
                        <p>Loại: {phoneDetail.type}</p>
                        <div className='flex gap-2'>
                            <button className='bg-yellow-400 p-4 text-white rounded-md'>Sửa</button>
                            <button 
                                className='bg-red-400 p-4 text-white rounded-md'
                                onClick={handleDelete}
                            >Xóa</button>
                        </div>
                    </div>
                )
            }

        </>

    )
}

export default PhoneItem