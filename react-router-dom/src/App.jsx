import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import User from './components/User'
import About from './components/About'
import Login from './components/Login'
import NotFound from './components/NotFound'
import Search from './components/Search'
import ProtectedRoute from './components/ProtectedRoute'
import AdminRoute from './components/AdminRoute'
import Admin from './components/Admin'
import UserDetail from './components/UserDetail'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        {/* define các route con bên trong Layout */}
        {/* index: hiển thị Home component khi URL là "/" */}
        <Route index element={<Home />} />

        {/* tạo protect route để sau khi login thì mới hiển thị page user profile */}
        <Route path='login' element={<Login />} />
        <Route
          path='user'
          element={
            // <ProtectedRoute
            //   user={user}
            //   childRoute={<User />}
            // />
            <ProtectedRoute>
              <User/>
            </ProtectedRoute>
          } />
        
        <Route
          path='user/:id'
          element={
            <ProtectedRoute>
              <UserDetail />
            </ProtectedRoute>
          }
        />

        <Route path='about' element={<About />} />
        <Route 
          path='admin'
          element={
            <AdminRoute>
              <Admin />
            </AdminRoute>
          }
        />
        <Route path='search' element={<Search />} />
        {/* 404 - path="*" khớp với mọi URL chưa match trước đó */}
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
