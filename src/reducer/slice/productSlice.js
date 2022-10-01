import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    products: []
}
const productSlice = createSlice({
    name:'products',
    initialState,
    reducers:{
        getAllProductSlice: (state,action) =>{
            state.products = action.payload
        }

    }
})

export const {getAllProductSlice} = productSlice.actions;
export default productSlice.reducer;