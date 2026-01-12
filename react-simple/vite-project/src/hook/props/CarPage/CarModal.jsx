import React from 'react'

// {
//             color: 'silver',
//             name: 'Xe màu bạc',
//             image: '/CarBasic/products/silver-car.jpg',
//             icon: '/CarBasic/icons/icon-silver.jpg'
//         }

const CarModal = ({car, onCloseModal}) => {
  return (
    <div className='p-4 bg-gray-200 rounded-lg border border-gray-300'>
        <h3 className='text-lg font-bold'>{car.name}</h3>
        <img className='w-full h-48 object-cover' src={car.image} alt={car.name} />
        <button
            className='bg-gray-300 px-4 py-2 rounded'
            onClick={onCloseModal}
        >Close</button>
        <button className='bg-blue-500 text-white px-4 py-2 rounded'>Save</button>
    </div>
  )
}

export default CarModal