import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    categories : [],
    category : {},
    loading : false
}
const categorySlice = createSlice({
    name: "categories",
    initialState,
    reducers: {
        getAllCategorySlice: (state, action) => {
            state.categories = action.payload
        },
        createCategorySlice: (state, action) => {
            state.categories.push(action.payload)
            state.loading = false
        },
        deleteCategorySlice: (state, action) => {
            state.categories = state.categories.filter((arrow) => arrow._id !== action.payload)
        },
        updateCategorySlice: (state, action) => {

        },
        getDetailCategorySlice: (state, action) => {
            state.category = action.payload
        }
    }
})
export const {getAllCategorySlice,createCategorySlice,deleteCategorySlice,updateCategorySlice,getDetailCategorySlice} = categorySlice.actions
export default  categorySlice.reducer;
