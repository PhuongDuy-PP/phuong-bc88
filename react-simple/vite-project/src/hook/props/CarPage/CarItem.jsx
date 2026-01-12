import React from 'react'

const CarItem = ({car, onShowDetail}) => {
  return (
    <div className='p-4 bg-white rounded-lg shadow-md border border-blue-500'>
        <img className='w-full h-48 object-cover' src={car.image} alt={car.name} />
        <h4 className='text-lg font-semibold'>{car.name}</h4>
        <button
            className='bg-blue-500 text-white px-4 py-2 rounded'
            onClick={() => onShowDetail(car)}
        >Xem chi tiết
        </button>
    </div>
  )
}

export default CarItem