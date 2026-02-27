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

    // nhận loading, error từ store
    // const loading = useSelector((state) => state.product.loading)
    // const error = useSelector((state) => state.product.error)
  return (
    <div className='max-w-[1200px] mx-auto p-4'>
        <Header
            // showCartModal={handleShowCartModal}
        />

        {/* {
            loading && (
                <p className='text-3xl text-center mb-4'>Đang tải danh sách sản phẩm</p>
            )
        }

        {
            error && (
                <p className='mb-4 text-3xl text-center text-red-400'>{error}</p>
            )
        } */}
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
