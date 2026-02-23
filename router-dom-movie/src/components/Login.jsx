import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

const Login = () => {
    const location = useLocation()
    const navigate = useNavigate()

    // gửi event login lên useAuth
    const {login} = useAuth()

    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    })

    const [error, setError] = useState("")

    const handleChange = (e) => {
        const {name, value} = e.target
        setLoginData({
            ...loginData,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const {email, password} = loginData

        // call function login lên AuthContext
        const success = login(email, password)

        if(success) {
            // chuyển về trang chủ hoặc là trang trước đó
            // location => useLocation
            const from = location.state?.from?.pathname || '/'
            // navigate => useNavigate
            navigate(from, {replace: true})
        } else {
            setError("Email hoặc password không đúng")
        }

    }

    return (
        <div className="max-w-md mx-auto mt-12 p-8 border border-gray-300 rounded-lg shadow-md">
            <h2 className="text-center mb-8 text-2xl font-bold">Đăng nhập</h2>
            {
                error && (
                    <div
                        id="errorMessage"
                        className="p-3 bg-red-100 text-red-700 rounded mb-4"
                    >
                        {error}        
                    </div>
                )
            }
            
            <form id="loginForm" onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block mb-2 font-bold">Email:</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        onChange={handleChange}
                        className="w-full px-3 py-3 border border-gray-300 rounded text-base" placeholder="admin@example.com"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2 font-bold">Mật khẩu:</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        required
                        className="w-full px-3 py-3 border border-gray-300 rounded text-base" placeholder="admin123"
                        onChange={handleChange}
                        />
                </div>
                <button type="submit" className="w-full px-3 py-3 bg-blue-500 text-white border-none rounded text-base cursor-pointer font-bold hover:bg-blue-600">
                    Đăng nhập
                </button>
            </form>
            <div className="mt-4 text-sm text-gray-600">
                <p><strong>Demo accounts:</strong></p>
                <p>Admin: admin@example.com / admin123</p>
                <p>User: user@example.com / user123</p>
            </div>
        </div>

    )
}

export default Login
