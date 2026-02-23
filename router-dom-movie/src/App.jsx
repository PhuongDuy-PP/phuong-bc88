import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import MovieList from './components/MovieList'
import MovieDetail from './components/MovieDetail'
import Login from './components/Login'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MovieList />} />
        <Route path='movie/:id' element={<MovieDetail />} />
        <Route path='login' element={<Login />} />
      </Route>
    </Routes>
  )
}

export default App
