import axios from "axios"
import { setError, setListProduct, setLoading } from "./productSlice"

const PHONE_API_URL = "https://6986fe8f8bacd1d773ec3ce9.mockapi.io/api/v1/phone"

// middleware = storeAPI => next => action => {....}
export const productMiddleware = storeAPI => next => async (action) => {
    // storeAPI: {dispatch, getState} - cho phép middleware dispatch action lên reducer
    // hoặc lấy state hiện tại trên store

    // next: hàm chuyển action sang middleware tiếp theo (nếu có) / reducer
    // handle call API GET list product
    if (action.type !== 'product/fetchFromApi') {
        // nếu không phải là action cần lấy => chuyển qua middleware tiếp theo
        // hoặc reducer, không làm gì thêm
        next(action)
    }

    const {dispatch} = storeAPI
    // khi handle call API
    // 3 state: loading, error, listProduct
    try {
        dispatch(setLoading(true))
        const response = await axios.get(PHONE_API_URL)

        const data = response.data

        // mapping data từ API -> data mong đợi để không phải sửa nhiều
        const dataMapped = data.map((item) => ({
            //   { id: 1, name: 'Áo thun nam', price: 199000, image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400', description: 'Áo thun cotton cao cấp, thoáng mát, phù hợp mọi hoạt động.' },
            id: Number(item.id),
            name: item.name,
            price: Number(item.price),
            image: item.img,
            description: item.desc
        }))

        // dispatch data lên store
        dispatch(setListProduct(dataMapped))

        // clear error nếu có
        dispatch(setError(null))

    } catch (error) {
        dispatch(setError(error.message || 'Lỗi fetch list product'))
        
    } finally{
        // dù pass hay fail thì vẫn phải tắt loading
        dispatch(setLoading(false))
    }
}