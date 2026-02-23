import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

const Header = () => {
    const {user, logout} = useAuth()
    return (
        <header className="bg-gray-800 text-white px-8 py-4 flex justify-between items-center">
            <a href="index.html" className="text-white no-underline text-2xl font-bold">Movie Theater</a>
            <nav className="flex items-center gap-4">
                <a href="index.html" className="text-white no-underline px-4 py-2 rounded hover:bg-white/10">Phim</a>
                {
                    user ? (
                        <>
                            <span className="px-4 py-2">Xin chào, {user.email}</span>
                            <button className="px-4 py-2 bg-red-600 text-white border-none rounded cursor-pointer hover:bg-red-700" onClick={logout}>Đăng xuất</button>
                        </>
                    ): (
                        <Link to="/login" className="text-white no-underline px-4 py-2 rounded bg-green-600 hover:bg-green-700">Đăng nhập</Link>
                    )
                }
                
            </nav>
        </header>
    )
}

export default Header
