import React from 'react'
import { useSelector } from 'react-redux'
import ProductItem from './ProductItem'

const ProductList = () => {

    // nhận state products từ store của redux
    // => useSelector để nhận state
    const products = useSelector((state) => state.product.products)

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
