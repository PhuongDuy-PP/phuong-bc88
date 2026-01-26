import React, { useEffect, useState } from 'react'
import PhoneItem from './PhoneItem'
import axios from 'axios'

const PhoneParent = () => {
    const API_URL = "https://696e19dcd7bacd2dd715bfcf.mockapi.io/api/v1/phone"

    const [phones, setPhones] = useState([])

    const [selectedPhone, setSelectedPhone] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        // mở loading spinner
        setLoading(true)

        axios.get(API_URL)
            // response: nhận dữ liệu từ API
            // 2xx, 3xx
            .then((response) => {
                console.log(response.data)
                setPhones(response.data)
            }) // call API thành công
            // 4xx, 5xx
            .catch((err) => {
                console.log(err.message)
            }) // call API thất bại
            .finally(() => {
                // đóng loading spinner
                setLoading(false)
            }) // luôn luôn chạy dù API có pass hay fail
    }, [])

    return (
        <div className='mx-auto my-8 p-4'>
            <h3 className='text-xl font-bold mb-4'>Danh sách điện thoại</h3>

            {/* loading spinner */}
            {
                loading && (
                    <div className='text-center py-8'>
                        Đang tải dữ liệu....
                    </div>
                )
            }


            {/* list phones */}
            {
                phones.length > 0 && (
                    <div className='grid grid-cols-3 gap-4'>
                        {
                            phones.map((phone) => {
                                return (
                                    <PhoneItem key={phone.id} phone={phone} />
                                )
                            })
                        }
                    </div>
                )
            }

            {/* list phone rỗng */}
            {
                phones.length === 0 && (
                    <div className='text-center py-8'>
                        Không có điện thoại nào.
                    </div>
                )
            }
        </div>
    )
}

export default PhoneParent