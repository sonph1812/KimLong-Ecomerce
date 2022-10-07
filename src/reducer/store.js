
import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./slice/userSlice"
import productReducer from "./slice/productSlice"
import brandReducer from "./slice/brandSlice"
import categoryReducer from "./slice/categorySlice";

const store = configureStore({
    reducer:{
        userReducer: userReducer,
        productReducer:productReducer,
        brandReducer: brandReducer,
        categoryReducer : categoryReducer
    }
})
export default store