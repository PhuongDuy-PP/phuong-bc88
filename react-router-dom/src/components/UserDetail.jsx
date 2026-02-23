import React from 'react'
import { Link, useParams } from 'react-router-dom'

// /user/:id (Lưu ý: id là do user sẽ define trong App.jsx)
// VD: /user/123
// useParams() => {id: "123"}
const UserDetail = () => {
    const params = useParams()

    const userId = params.id

    // mock data để giả lập API
    const users = {
        '1': {id: 1, name: 'Admin', email: 'admin@gmail.com', role: 'admin'},
        '2': {id: 2, name: 'User', email: 'user@gmail.com', role: 'user'}
    }

    // tìm user theo userId. nhận được từ params
    const user = users[userId]

    return (
        <div className='p-6 max-w-md mx-auto bg-gray-700 rounded-lg'>
            <h2 className='text-xl font-bold text-white mb-4'>
                Chi tiết User ID: {userId}
            </h2>
            <div className='space-y-2 text-green-500'>
                <p>{user.name}</p>
                <p>{user.email}</p>
                <p>{user.role}</p>
            </div>
            <Link
                to="/user"
                className='mt-4 inline-block px-4 py-2 bg-indigo-300 text-white'
            >
                Quay lại
            </Link>
        </div>
    )
}

export default UserDetail
