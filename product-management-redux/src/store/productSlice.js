
// 1 slice bao gồm: initState + reducer + action

import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    products: [
      { id: 1, name: 'Áo thun nam', price: 199000, image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400', description: 'Áo thun cotton cao cấp, thoáng mát, phù hợp mọi hoạt động.' },
      { id: 2, name: 'Quần jeans slim', price: 399000, image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400', description: 'Quần jeans form slim, chất liệu denim bền đẹp.' },
    //   { id: 3, name: 'Giày sneaker', price: 599000, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400', description: 'Giày sneaker thể thao, đế cao su chống trơn.' },
    //   { id: 4, name: 'Túi xách da', price: 449000, image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400', description: 'Túi xách da thật, thiết kế tinh tế, nhiều ngăn.' },
    //   { id: 5, name: 'Đồng hồ thời trang', price: 899000, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400', description: 'Đồng hồ nam cao cấp, dây da tự nhiên.' },
    //   { id: 6, name: 'Kính mát', price: 299000, image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400', description: 'Kính mát chống UV, gọng nhẹ tiện dụng.' }
    ],
    loading: false,
    error: null
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        // define các action nhận về từ UI
        fetchFromApi: (state, action) => {
            // không cần cập nhật gì cả vì middleware sẽ handle dispatch
            return state;
        },

        setLoading: (state, action) => {
            state.loading = action.payload
        },

        setListProduct: (state, action) => {
            state.products = action.payload
        },

        setError: (state, action) => {
            state.error = action.payload
        }
    }
})

export const {
    fetchFromApi,
    setLoading,
    setListProduct,
    setError
} = productSlice.actions

export default productSlice.reducer