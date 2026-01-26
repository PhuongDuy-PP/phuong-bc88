import axios from 'axios'
import React, { useEffect, useState } from 'react'

const PhoneItem = ({ phone }) => {
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
                        <button className='bg-yellow-400 p-4 text-white rounded-md'>Sửa</button>
                    </div>
                )
            }

        </>

    )
}

export default PhoneItem