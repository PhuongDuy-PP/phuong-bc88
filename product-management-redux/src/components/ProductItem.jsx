import React from 'react'
import { useDispatch } from 'react-redux'
import {addToCart} from '../store/cartSlice'

const ProductItem = ({product}) => {

    // C1: component con gửi action trực tiếp lên store redux
    // => useDispatch
    const dispatch = useDispatch()

    const onAdd = (product) => {
        // addToCart này lấy từ slice
        // redux sẽ tạo action có infor sau:
        // type: cart/addToCart
        // payload: product
        dispatch(addToCart(product))
    }

    return (
        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow product-card" data-id="${p.id}">
            <div className="aspect-square bg-slate-100 overflow-hidden cursor-pointer" data-click="detail">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="p-4">
                <h3 className="font-semibold text-slate-800 cursor-pointer" data-click="detail">
                    {product.name}
                </h3>
                <p className="text-emerald-600 font-bold mt-1">{product.price} VND</p>
                <button
                    className="add-to-cart-btn mt-3 w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 rounded-lg transition-colors text-sm"
                    onClick={() => onAdd(product)}
                >
                    Thêm vào giỏ
                </button>
            </div>
        </div>

    )
}

export default ProductItem
