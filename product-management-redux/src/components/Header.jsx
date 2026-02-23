import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleShowCart } from '../store/cartSlice'

const Header = () => {
    const totalQuantity = useSelector((state) => {
        // lấy state items của cartSlice
        return state.cart.items.reduce((sum, item) => sum + item.quantity, 0)
    })

    // C1: dùng lifting state up để gửi event showCartModal lên cho ProductManagement
    // khuyên dùng cách này

    // C2: gửi action lên redux => không nên
    const dispatch = useDispatch()

    const showCartModalRedux = () => {
        dispatch(handleShowCart())
    }

    return (
        <header className="bg-emerald-600 text-white shadow-lg sticky top-0 z-40">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                <h1 className="text-xl font-bold">Shop Sản Phẩm</h1>
                <button
                    id="cartBtn"
                    className="relative p-2 hover:bg-emerald-500 rounded-full transition-colors"
                    // onClick={showCartModal} // C1; lifting state up
                    onClick={showCartModalRedux}
                >
                    <i className="fas fa-shopping-cart text-2xl" />
                    <span id="cartCount" className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">{totalQuantity}</span>
                </button>
            </div>
        </header>
    )
}

export default Header
