import {createSlice} from "@reduxjs/toolkit";
import products from "../../pages/Products";

const initialState = {
    products: [],
    product: {},
    loading:false
}
const productSlice = createSlice({
    name:'products',
    initialState,
    reducers:{
        getAllProductSlice: (state,action) =>{

            state.products = action.payload

        },
        createProductSlice:(state, action) => {
            state.products = action.payload
            state.loading = false
        },
        deleteProductSlice:(state, action) => {
            state.products.filter((product)=>(
                product !== action.payload
            ))
            state.loading = true
        },
        updateProductSlice : (state,action) => {

        },
        getDetailProductSlice : (state,action) => {

            state.product = action.payload
        }



    }
})

export const {getAllProductSlice,createProductSlice,deleteProductSlice,updateProductSlice,getDetailProductSlice} = productSlice.actions;
export default productSlice.reducer;
