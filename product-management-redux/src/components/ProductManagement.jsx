import React, { useState } from 'react'
import Header from './Header'
import ProductList from './ProductList'
import Cart from './Cart'
import { useSelector } from 'react-redux'

const ProductManagement = () => {
    const [isShowCartModal, setIsShowCartModal] = useState(false)

    // C2: nhận state từ redux về
    const isShowCartRedux = useSelector((state) => state.cart.isShowCart)
    console.log("isShowCartRedux: ", isShowCartRedux)

    // const handleShowCartModal = () => {
    //     setIsShowCartModal(true)
    // }
  return (
    <div className='max-w-[1200px] mx-auto p-4'>
        <Header
            // showCartModal={handleShowCartModal}
        />
        <ProductList />
        {
            isShowCartRedux && (
                <Cart />
            )
        }
    </div>
  )
}

export default ProductManagement
