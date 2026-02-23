import React from 'react'
import { Link } from 'react-router-dom'

const User = () => {
  return (
    <div className='p-6'>
      <h2 className='text-xl font-bold text-white mb-4'>User profile</h2>
      <div>
        <Link
          to="/user/1"
          className='inline-block px-4 py-2 bg-indigo-500 text-white'
        >
          Xem chi tiết user ID 1 (demo useParams)
        </Link>

        <Link
          to="/user/2"
          className='inline-block px-4 py-2 bg-indigo-500 text-white'
        >
          Xem chi tiết user ID 2 (demo useParams)
        </Link>
      </div>
    </div>
  )
}

export default User