import { createContext, useContext, useState } from "react";

// B1: tạo context
const AuthContext = createContext(null);

// B2: tạo custom hook dùng useContext
// useAuth để các component như Layout, Login, User. có thể lấy được state, function
// để xác minh user

export const useAuth = () => {
    const context = useContext(AuthContext)

    return context
}

// B3: AuthProvider để cung cấp global state cho toàn app

export const AuthProvider = ({ children }) => {
    // state đơn giản để quản lý user
    // future: useContext
    const [user, setUser] = useState(() => {
        // nhận user infor từ localStorage
        // nếu có thì parse về object, không có thì trả về null
        const savedUser = localStorage.getItem('user');
        return savedUser ? JSON.parse(savedUser) : null;
    })

    const login = (email, password) => {
        const users = [
            {
                id: 1,
                email: 'admin@example.com',
                password: 'admin123',
                role: 'admin'
            },
            {
                id: 2,
                email: 'user@example.com',
                password: 'user123',
                role: 'user'
            }
        ]
        // tìm email trong list users
        const foundUser = users.find(u => u.email === email && u.password === password);
        if (foundUser) {
            setUser(foundUser);

            // lưu user vào localStorage
            localStorage.setItem('user', JSON.stringify(foundUser));
        }
    }

    const logout = () => {
        console.log('logout');
        setUser(null);
        localStorage.removeItem('user');
    }

    const value = {
        user,
        login,
        logout
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}