
import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./slice/userSlice"
import productReducer from "./slice/productSlice"
import brandReducer from "./slice/brandSlice"
const store = configureStore({
    reducer:{
        userReducer: userReducer,
        productReducer:productReducer,
        brandReducer: brandReducer

    }
})
export default store