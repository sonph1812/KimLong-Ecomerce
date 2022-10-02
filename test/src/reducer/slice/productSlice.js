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
        }


    }
})

export const {getAllProductSlice,createProductSlice} = productSlice.actions;
export default productSlice.reducer;
