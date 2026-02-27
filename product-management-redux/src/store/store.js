import { configureStore } from "@reduxjs/toolkit";
import productReducer from './productSlice';
import cartReducer from './cartSlice';
import { productMiddleware } from "./productMiddleware";

const store = configureStore({
    reducer: {
        product: productReducer,
        cart: cartReducer,
    },
    // define middleware
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productMiddleware) 
})

export default store