import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    items: [],
    isShowCart: false
    // items: [
    //     {
    //         product: {id, name, price, image, category, descript},
    //         quantity: 1
    //     },
    //     {
    //         product: {id, name, price, image, category, descript},
    //         quantity: 1
    //     }
    // ]
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        // trong mỗi action nhận về từ UI sẽ bao gồm:
        // type: name + '/' + tên function. VD: cart/addToCart
        // payload
        addToCart: (state, action) => {
            // B1: lấy product
            const product = action.payload
            // B2: tìm product này trong list item
            const found = state.items.find((item) => item.product.id === product.id)
            // TH1: nếu tìm thấy => tăng quantity lên 1 đơn vị
            if(found) {
                found.quantity += 1
            } else {
                // TH2: nếu chưa có => add product vào items và set quantity = 1
                state.items.push({
                    product,
                    quantity: 1
                })
            }
        },

        handleShowCart: (state, action) => {
            state.isShowCart = true
        },

        handleCloseCart: (state, action) => {
            state.isShowCart = false
        },

        incrementItemCart: (state, action) => {
            // action: product id
            const productId = action.payload

            const found = state.items.find((item) => item.product.id === productId)
            // nếu tìm thấy => tăng quantity lên 1 đơn vị
            if(found) {
                found.quantity += 1
            }
        },

        decrementItemCart: (state, action) => {
            const productId = action.payload

            // const found = state.items.find((item) => item.product.id === productId)
            // // nếu tìm thấy => giảm quantity xuống 1 đơn vị
            // if(found) {
            //     found.quantity -= 1
            // }

            const index = state.items.findIndex((item) => item.product.id === productId)
            if(index !== -1) {
                const foundItem = state.items[index]
                if (foundItem.quantity === 1) {
                    state.items.splice(index, 1)
                } else {
                    foundItem.quantity -= 1
                }
            }
        },

        handleRemoveItem: (state, action) => {
            const productId = action.payload

            const index = state.items.findIndex((item) => item.product.id === productId)
            if(index !== -1) {
                state.items.splice(index, 1)
            }
        }
    }
})

export const {
    addToCart,
    handleShowCart,
    handleCloseCart,
    incrementItemCart,
    decrementItemCart,
    handleRemoveItem
} = cartSlice.actions

export default cartSlice.reducer