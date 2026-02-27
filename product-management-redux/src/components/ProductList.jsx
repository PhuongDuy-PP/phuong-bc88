import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductItem from './ProductItem'
import { fetchFromApi } from '../store/productSlice'

const ProductList = () => {

    const dispatch = useDispatch()
    const loading = useSelector((state) => state.product.loading)
    const error = useSelector((state) => state.product.error)
    const products = useSelector((state) => state.product.products)
    // dùng useEffect để call API
    useEffect(() => {
        dispatch(fetchFromApi())
    }, [dispatch])

    // nhận state products từ store của redux
    // => useSelector để nhận state
    

    return (
        <main className="container mx-auto px-4 py-8">
            <div id="productGrid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {
                    products.map((product) => {
                        return (
                            <ProductItem
                                key={product.id}
                                product={product}
                            />
                        )
                    })
                }
            </div>
        </main>
    )
}

export default ProductList
