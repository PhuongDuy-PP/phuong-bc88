import React from 'react'
import Card from '../Card/Card'

const Content = () => {
  return (
    <div className='bg-blue-400 text-black p-6 h-full w-2/3 text-xl font-bold'>
        Content
        {/* flex-wrap: cho phép các Card xuống dòng nếu không đủ chỗ trên 1 hàng ngang */}
        {/* flex-row: sắp xếp các Card theo hàng ngang */}
        <div className='flex flex-row gap-4 flex-wrap'>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
    </div>
  )
}

export default Content