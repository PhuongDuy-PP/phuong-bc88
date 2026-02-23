import React from 'react'

const Cart = () => {
    return (
        <div id="cartModal" className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] flex flex-col">
                <div className="p-6 border-b border-slate-200">
                    <div className="flex justify-between items-center">
                        <h2 className="text-xl font-bold text-slate-800">
                            <i className="fas fa-shopping-cart mr-2 text-emerald-600" />Giỏ hàng
                        </h2>
                        <button id="closeCart" className="text-slate-400 hover:text-slate-600 text-2xl">×</button>
                    </div>
                </div>
                <div id="cartItems" className="flex-1 overflow-y-auto p-6 space-y-4">
                    {/* Cart items will be rendered here */}
                </div>
                <div id="cartEmpty" className="hidden flex-1 flex items-center justify-center p-8 text-slate-400">
                    <p className="text-center">
                        <i className="fas fa-shopping-basket text-5xl mb-4 block" />
                        Giỏ hàng trống
                    </p>
                </div>
                <div id="cartFooter" className="hidden p-6 border-t border-slate-200">
                    <div className="flex justify-between text-lg font-semibold mb-4">
                        <span>Tổng cộng:</span>
                        <span id="cartTotal" className="text-emerald-600">0₫</span>
                    </div>
                </div>
            </div>
        
        </div>
    )
}

export default Cart
