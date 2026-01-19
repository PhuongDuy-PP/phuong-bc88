import React from 'react'

const Header = ({ countCart, showCartList }) => {
    return (
        <div className="mt-8 max-w-7xl mx-auto px-4">
            <h2 className="text-xl font-bold mb-4">Demo 2: Header với giỏ hàng có 1 item</h2>
            <header className="bg-white shadow-md rounded-lg">
                <div className="px-4 py-4 flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-gray-800">Ecommerce Store</h1>
                    <div
                        className="relative cursor-pointer"
                        onClick={showCartList}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-gray-700 hover:text-gray-900 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        {
                            countCart > 0 && (
                                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                                    {countCart}
                                </span>
                            )
                        }

                    </div>
                </div>
            </header>
        </div>

    )
}

export default Header