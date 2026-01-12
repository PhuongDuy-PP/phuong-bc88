import React, { useState } from 'react'

const CarColorEx = () => {
    // define state để lưu trữ màu sắc của xe
    const [car, setCar] = useState({
        color: 'red',
        name: 'Xe màu đỏ',
        image: '/CarBasic/products/red-car.jpg',
        icon: '/CarBasic/icons/icon-red.jpg'
    })

    // define dữ liệu để hiện thị các icon màu
    // => lưu object để lưu giá trị về màu xe, icon, title
    const colors = [
        {
            color: 'red',
            name: 'Xe màu đỏ',
            image: '/CarBasic/products/red-car.jpg',
            icon: '/CarBasic/icons/icon-red.jpg'
        },
        {
            color: 'black',
            name: 'Xe màu đen',
            image: '/CarBasic/products/black-car.jpg',
            icon: '/CarBasic/icons/icon-black.jpg'
        },
        {
            color: 'silver',
            name: 'Xe màu bạc',
            image: '/CarBasic/products/silver-car.jpg',
            icon: '/CarBasic/icons/icon-silver.jpg'
        },
        {
            color: 'steel',
            name: 'Xe màu thép',
            image: '/CarBasic/products/steel-car.jpg',
            icon: '/CarBasic/icons/icon-steel.jpg'
        }
    ]

    const handleChangeColor = (colorObj) => {
        // React sẽ so sánh colorObj với state hiện tại
        // nếu khác nhau => render lại page
        // ngược lại => giữ nguyên
        setCar(colorObj)
    }
  return (
    <div className='p-6 flex justify-center bg-white rounded-lg shadow-2xl'>
        {/* hiển thị màu sắc của xe */}
        <div className='mb-6 w-96 flex justify-center'>
            <img src={car.image} alt={car.name} />
        </div>

        {/* container chứa các icon màu */}
        {/* define dữ liệu để hiển thị các icon màu */}
        {
            colors.map((colorObj) => {
                return (
                    <div
                        className='cursor-pointer w-16 h-16'
                        // handleChangeColor có nhận tham số
                        // () => handleChangeColor(colorObj)
                        // nêu handleChangeColor mà ko có tham số
                        // onClick={handleChangeColor}
                        onClick={() => handleChangeColor(colorObj)}
                        key={colorObj.color}
                    >
                        <img src={colorObj.icon} alt={colorObj.name} />
                    </div>
                )
            })
        }
    </div>
  )
}

export default CarColorEx