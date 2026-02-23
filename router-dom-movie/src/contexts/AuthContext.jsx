import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null)

export const useAuth = () =>{
    const context = useContext(AuthContext)

    return context
}

export const AuthProvider = ({children}) => {
    // define state user, function login, logout
    const [user, setUser] = useState(() => {
        const savedUser = localStorage.getItem('user')
        return savedUser ? JSON.parse(savedUser) : null
    })

    const login = (email, password) => {
        const users = [
            {id: 1, email: 'admin@example.com', password: 'admin123', role: 'Admin'},
            {id: 2, email: 'user@example.com', password: 'user123', role: 'User'}
        ]

        const foundUser = users.find(u => u.email === email && u.password === password)

        if(foundUser) {
            setUser(foundUser)
            localStorage.setItem('user', JSON.stringify(foundUser))
            return true
        }
        return false
    }

    const logout = () => {
        localStorage.removeItem('user')
        setUser(null)
    }

    const value = {
        login,
        user,
        logout
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}