import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductItem from './ProductItem'
import { fetchFromApi, setListProduct } from '../store/productSlice'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const ProductList = () => {

    const dispatch = useDispatch()

    const [searchText, setSearchText] = useState('')

    const [deboundSearch, setDeboundSearch] = useState('')


    // const products = useSelector((state) => state.product.products)
    // dùng useEffect để call API
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            // sau 2s user không gõ thêm gì => gửi action product/fetchFromApi
            // dispatch(fetchFromApi(searchText)) // đoạn code middleware redux

            // sau 2s user ko gõ thêm => chốt keyword search để lưu data vào RAM (tanstack query)
            setDeboundSearch(searchText)
        }, 2000)

        // nếu user typing tiếp => hủy timeout cũ => ko call API nữa
        return () => clearTimeout(timeoutId)

    }, [searchText])

    // define tanstack query cho productList
    // move logic call API xuống cho tanstack query handle, code trên middleware sẽ xóa đi
    const {
        data: products = [],
        isLoading,
        isError,
        error
    } = useQuery({
        queryKey: ['products', deboundSearch],
        queryFn: async () => {
            const response = await axios.get(
                "https://6986fe8f8bacd1d773ec3ce9.mockapi.io/api/v1/phone",
                {
                    params: {
                        search: deboundSearch
                    }
                }
            )

            const data = response.data

            // mapping data
            const mapped = data.map((item) => ({
                id: Number(item.id),
                name: item.name,
                price: Number(item.price),
                image: item.img,
                description: item.desc
            }))

            // luư data lên store redux
            dispatch(setListProduct(mapped))

            // LƯU Ý: phải return
            return mapped
        },
        // thời gian "fresh", nếu gặp searchText trong RAM => lấy value từ RAM
        staleTime: 5 * 60 * 1000
    })

    // nhận state products từ store của redux
    // => useSelector để nhận state


    return (
        <main className="container mx-auto px-4 py-8">
            {/* thanh search */}
            <div className='mb-6'>
                <label className='block text-sm font-medium mb-1'>Tìm kiếm sản phẩm (theo tên, mô tả, giá)</label>
                <input
                    type="text"
                    className='w-full border border-gray-400 rounded px-3 py-2 text-sm'
                    value={searchText}
                    onChange={(event) => setSearchText(event.target.value)}
                    placeholder='Nhập từ khóa'
                />
            </div>

            {
                isLoading && (
                    <p className='text-3xl text-center mb-4'>Đang tải danh sách sản phẩm</p>
                )
            }

            {
                isError && (
                    <p className='mb-4 text-3xl text-center text-red-400'>{error}</p>
                )
            }

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
