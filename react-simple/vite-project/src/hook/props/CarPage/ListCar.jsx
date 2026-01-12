import React, { useState } from 'react'
import CarItem from './CarItem'
import CarModal from './CarModal';

const ListCar = () => {
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

    const [selectedCar, setSelectedCar] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // vì event của component con có dạng là callback function nên
    // component cha cũng sẽ nhận là function
    const handleShowDetail = (car) => {
        console.log('Show details for car:', car);

        // lưu info car vào state
        setSelectedCar(car);
        // bật component modal lên
        setIsModalOpen(true);
    }

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
            {
                colors.map((car) => {
                    return (
                        <CarItem key={car.color} car={car} onShowDetail={handleShowDetail} />
                    )
                })
            }
            {
            isModalOpen && (
                <CarModal car={selectedCar} onCloseModal={() => setIsModalOpen(false)} />
            )
        }
        </div>
    )
}

export default ListCar