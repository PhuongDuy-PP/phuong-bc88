import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setListProduct } from '../store/productSlice'
import axios from 'axios'

const AdminProductPage = () => {

    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [image, setImage] = useState('')
    const [type, setType] = useState('iphone')

    // cho phép thao tác với cache từ useQuery
    const queryClient = useQueryClient()

    const dispatch = useDispatch()

    const {
        data: products = [],
        isLoading,
        isError,
        error
    } = useQuery({
        queryKey: ['admin-products'],
        queryFn: async () => {
            const response = await axios.get(
                "https://6986fe8f8bacd1d773ec3ce9.mockapi.io/api/v1/phone"
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
        }
    })

    // useMutation - dùng để tương tác với data (POST/PUT/DELETE)
    const createProductMutation = useMutation({
        mutationFn: async ({name, price, type, image}) => {
            const response = await axios.post(
                "https://6986fe8f8bacd1d773ec3ce9.mockapi.io/api/v1/phone",
                {
                    name,
                    price: Number(price),
                    type,
                    img: image,
                    desc: "Sản phẩm mới tạo",
                    screen: '',
                    backCamera: '',
                    frontCamera: ''
                }
            )
            return response.data
        },
        onSuccess: () => {
            // khi tạo data thành công
            // => queryClient sẽ gọi useQuery để tự refetch data mới
            queryClient.invalidateQueries({queryKey: ['admin-products']})

            // reset form về rỗng
            setName('')
            setPrice('')
            setImage('')
            setType('iphone')
        }
    })

    const handleCreateProduct = (event) => {
        event.preventDefault()
        if(!name || !price) {
            return
        }

        // gửi data cho mutation
        createProductMutation.mutate({
            name,
            price,
            type,
            image
        })
    }

  return (
    <div className='mt-6'>
        <h2 className='mb-4 text-lg font-semibold'>Admin - Quản lý sản phẩm</h2>

        <form
            className='mb-6 flex flex-wrap items-center gap-3 text-sm'
            onSubmit={handleCreateProduct}
        >
            <div>
                <label className='block mb-1'>Tên sản phẩm</label>
                <input
                    type="text"
                    className='border border-gray-200 rounded px-2 py-1'
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
            </div>

            <div>
                <label className='block mb-1'>Giá tiền</label>
                <input
                    type="text"
                    className='border border-gray-200 rounded px-2 py-1'
                    value={price}
                    onChange={(event) => setPrice(event.target.value)}
                />
            </div>
            <div>
                <label className='block mb-1'>Loại smartphone</label>
                <select
                    className='border border-gray-200 rounded px-2 py-1'
                    value={type}
                    onChange={(event) => setType(event.target.value)}
                >
                    <option value="iphone">Iphone</option>
                    <option value="samsung">Samsung</option>
                </select>
            </div>

            <div>
                <label className='block mb-1'>Link hình</label>
                <input
                    type="text"
                    className='border border-gray-200 rounded px-2 py-1'
                    placeholder='https://.......'
                    value={image}
                    onChange={(event) => setImage(event.target.value)}
                />
            </div>
            <button
                type='submit'
                className='px-3 py-2 rounded bg-blue-300 text-white text-sm font-medium'
            >
                Tạo sản phẩm mới
            </button>

        </form>

        <table className='w-full text-sm border border-gray-500'>
            <thead>
                <tr className='bg-gray-100'>
                    <th className='border border-gray-200 px-2 py-1 text-center'>ID</th>
                    <th className='border border-gray-200 px-2 py-1 text-center'>Tên</th>
                    <th className='border border-gray-200 px-2 py-1 text-center'>Giá</th>
                    <th className='border border-gray-200 px-2 py-1 text-center'>Loại</th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map((product) => {
                        return (
                            <tr key={product.id}>
                                <td className='px-2 py-1 border border-gray-200'>{product.id}</td>
                                <td className='px-2 py-1 border border-gray-200'>{product.name}</td>
                                <td className='px-2 py-1 border border-gray-200'>{product.price} VND</td>
                                <td className='px-2 py-1 border border-gray-200'>{product.type}</td>
                            </tr>
                        )
                    })
                }
            </tbody>

        </table>
    </div>
  )
}

export default AdminProductPage
