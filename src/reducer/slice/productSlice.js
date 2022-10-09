import {createSlice} from "@reduxjs/toolkit";
import products from "../../pages/Products";

const initialState = {
    products: [],
    product: {},
    loading: false,
    listSearch:null,
    sortProducts:[]
}
const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        getAllProductSlice: (state, action) => {
            state.products = action.payload
        },
        createProductSlice:(state, action) => {
            state.products.push(action.payload)
            state.loading = false
        },
        deleteProductSlice:(state, action) => {
            state.products = state.products.filter((arrow) => arrow._id !== action.payload)
        },
        updateProductSlice : (state,action) => {
            // console.log(action.payload)
            // state.products.splice(action.payload)
            // state.loading = false

        },
        getDetailProductSlice : (state,action) => {
            state.product = action.payload
        },
        setProductSearch: (state, action) => {
            state.listSearch = action.payload

        },
        setProductSort : (state, action) =>{
            state.sortProducts = action.payload
        }



    }
})

export const {setProductSort,setProductSearch, getAllProductSlice, createProductSlice, deleteProductSlice, updateProductSlice, getDetailProductSlice } = productSlice.actions;
export default productSlice.reducer;
