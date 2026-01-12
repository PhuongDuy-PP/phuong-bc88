import React from 'react'

const Card = ({user}) => {
  return (
    <div className='p-4 bg-gray-100 rounded-lg border border-blue-700'>
        <h3 className='font-bold text-lg mb-2'>{user.name}</h3>
        <p className='text-red-500'>
            Email: {user.email} <br />
        </p>
        <p className='text-green-500'>
            Vai trò: {user.role}
        </p>
    </div>
  )
}

export default Card