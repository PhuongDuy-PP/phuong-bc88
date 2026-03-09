import React, { useState } from 'react'
import Header from './Header'
import ProductList from './ProductList'
import Cart from './Cart'
import { useSelector } from 'react-redux'
import AdminProductPage from './AdminProductPage'

const ProductManagement = () => {

    const [activeTab, setActiveTab] = useState('shop')

    const [isShowCartModal, setIsShowCartModal] = useState(false)

    // C2: nhận state từ redux về
    const isShowCartRedux = useSelector((state) => state.cart.isShowCart)
    console.log("isShowCartRedux: ", isShowCartRedux)

    // const handleShowCartModal = () => {
    //     setIsShowCartModal(true)
    // }

    // nhận loading, error từ store
    const loading = useSelector((state) => state.product.loading)
    const error = useSelector((state) => state.product.error)
    return (
        <div className='max-w-[1200px] mx-auto p-4'>
            <Header
            // showCartModal={handleShowCartModal}
            />

            {/* style tab để chuyển đổi giữa page shop và page admin shop */}
            <div className='mt-4 mb-6 flex gap-3'>
                <button
                    className='px-3 py-1 rounded text-sm border bg-green-400 text-white'
                    onClick={() => setActiveTab("shop")}
                >Trang khách (shop)</button>
                <button
                    className='px-3 py-1 rounded text-sm border bg-orange-400 text-white'
                    onClick={() => setActiveTab("admin")}
                >Trang Admin</button>
            </div>

            {/* middleware redux */}
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
            {/* middleware redux */}

            {
                activeTab === 'shop' && (
                    <>
                        <ProductList />
                        {
                            isShowCartRedux && (
                                <Cart />
                            )
                        }
                    </>
                )
            }

            {
                activeTab === 'admin' && (<AdminProductPage />)
            }

        </div>
    )
}

export default ProductManagement
