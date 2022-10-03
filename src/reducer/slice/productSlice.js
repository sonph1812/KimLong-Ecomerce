import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    products: [],
    loading:false
}
const productSlice = createSlice({
    name:'products',
    initialState,
    reducers:{
        getAllProductSlice: (state,action) =>{
            state.products = action.payload
        },
        createProductSlice:(state, action)=>{
            state.products = action.payload
            state.loading = false
        },
        deleteProductSlice:(state, action)=>{
            state.products.filter((product)=>(
                product !== action.payload
            ))
            state.loading = true
        }



    }
})

export const {getAllProductSlice,createProductSlice,deleteProductSlice} = productSlice.actions;
export default productSlice.reducer;
