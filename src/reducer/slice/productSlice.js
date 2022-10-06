import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    products: [],
    product: {},
    loading: false,
    listSearch:null
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

        }



    }
})

export const {setProductSearch, getAllProductSlice, createProductSlice, deleteProductSlice, updateProductSlice, getDetailProductSlice } = productSlice.actions;
export default productSlice.reducer;
