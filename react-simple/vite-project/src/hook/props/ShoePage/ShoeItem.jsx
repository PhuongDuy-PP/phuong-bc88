import React from 'react'

// {
//       "id": 1,
//       "name": "Adidas Prophere",
//       "alias": "adidas-prophere",
//       "price": 350,
//       "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
//       "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
//       "quantity": 995,
//       "image": "https://svcy3.myclass.vn/images/adidas-prophere.png"
//     }

const ShoeItem = ({shoe, onShowDetail}) => {
  return (
    <div className='p-4 bg-white rounded-lg shadow-md border border-blue-500'>
        <img
            src={shoe.image} 
            alt={shoe.name} 
            className='w-full h-48 object-cover rounded-lg'
        />
        <h4 className='font-bold text-lg mb-2 text-gray-800'>{shoe.name}</h4>
        <p className='text-xl font-bold text-blue-600 mb-2'>
            {shoe.price}
        </p>
        <p className='text-sm'>
            Còn lại: {shoe.quantity} số lượng
        </p>
        <button 
            className='bg-blue-500 text-white py-2 px-4 rounded-lg'
            onClick={() => onShowDetail(shoe)}
        >
            Xem chi tiết
        </button>
    </div>
  )
}

export default ShoeItem