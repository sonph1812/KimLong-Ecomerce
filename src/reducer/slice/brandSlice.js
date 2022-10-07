import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    brands : [],
    brand : {},
    loading : false

}
const brandSlice = createSlice({
    name : 'brands',
    initialState,
    reducers : {
        getAllBrandSlice : (state,action)=>{
            state.brands = action.payload
        },
        createBrandSlice : (state, action) => {
            state.brands.push(action.payload)
            state.loading = false;
        },
        deleteBrandSlice : (state, action) => {
            state.brands = state.brands.filter((arrow) => arrow._id !== action.payload)
        },
        updateBrandSlice : (state, action) => {
        },
        getDetailBrandSlice : (state, action) => {
            state.product = action.payload
        }


    }
})
export const {getAllBrandSlice,createBrandSlice,deleteBrandSlice,getDetailBrandSlice,updateBrandSlice} = brandSlice.actions
export default brandSlice.reducer;