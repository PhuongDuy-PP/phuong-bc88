import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrementItemCart, handleCloseCart, handleRemoveItem, incrementItemCart } from '../store/cartSlice'

const Cart = () => {
    const dispatch = useDispatch()

    const onClose = () => {
        dispatch(handleCloseCart())
    }

    const incrementItem = (productId) => {
        dispatch(incrementItemCart(productId))
    }

    const decrementItem = (productId) => {
        dispatch(decrementItemCart(productId))
    }

    const onRemoveItem = (productId) => {
        dispatch(handleRemoveItem(productId))
    }

    // lấy list item từ store về
    const items = useSelector((state) => state.cart.items)

    // tính tổng tiền
    const calculateMoney = () => {
        let total = 0
        if (items.length > 0) {
            for(let item of items){
                total += item.product.price * item.quantity
            }
            return total
        }
        return total
    }

    return (
        <div id="cartModal" className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] flex flex-col">
                <div className="p-6 border-b border-slate-200">
                    <div className="flex justify-between items-center">
                        <h2 className="text-xl font-bold text-slate-800">
                            <i className="fas fa-shopping-cart mr-2 text-emerald-600" />Giỏ hàng
                        </h2>
                        <button
                            id="closeCart"
                            className="text-slate-400 hover:text-slate-600 text-2xl"
                            onClick={onClose}
                        >×
                        </button>
                    </div>
                </div>
                <div id="cartItems" className="flex-1 overflow-y-auto p-6 space-y-4">
                    {/* Cart items will be rendered here */}
                    {
                        items.map((item) => {
                            let data = item.product
                            return (
                                <div key={data.id} className='flex items-center justify-between bg-gray-200 rounded-lg p-3'>
                                    <div className='flex items-center'>
                                        <img className='w-8 h-8 rounded border' src={data.image} alt={data.name} />
                                        <p className='ml-1 font-semibold text-xl'>{data.name}</p>
                                    </div>

                                    <div className='flex gap-1 items-center'>
                                        <button
                                            className='p-3 rounded bg-green-400 hover:bg-green-600'
                                            onClick={() => decrementItem(data.id)}
                                        >-</button>
                                        <p className='ml-1 mr-1'>{item.quantity}</p>
                                        <button
                                            className='p-3 rounded bg-green-400 hover:bg-green-600'
                                            onClick={() => incrementItem(data.id)}
                                        >+</button>
                                        <button
                                            className='p-3 ml-3 rounded bg-red-400 text-white'
                                            onClick={() => onRemoveItem(data.id)}
                                        >Xóa</button>
                                    </div>

                                </div>
                            )
                        })
                    }

                </div>

                {
                    items.length === 0 && (
                        <div id="cartEmpty" className="flex-1 flex items-center justify-center p-8 text-slate-400">
                            <p className="text-center">
                                <i className="fas fa-shopping-basket text-5xl mb-4 block" />
                                Giỏ hàng trống
                            </p>
                        </div>
                    )
                }

                <div id="cartFooter" className="p-6 border-t border-slate-200">
                    <div className="flex justify-between text-lg font-semibold mb-4">
                        <span>Tổng cộng:</span>
                        <span id="cartTotal" className="text-emerald-600">{calculateMoney()} ₫</span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Cart
