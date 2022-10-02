
import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./slice/userSlice"
import productReducer from "./slice/productSlice"

const store = configureStore({
    reducer:{
        userReducer: userReducer,
        productReducer:productReducer

    }
})
export default store