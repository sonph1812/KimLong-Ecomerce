import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    categories : [],
    category : {},
    loading : false,
    listSearch:null
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
        },
        deleteCategorySlice: (state, action) => {
            state.categories = state.categories.filter((arrow) => arrow._id !== action.payload)
        },
        updateCategorySlice: (state, action) => {
            state.categories = [
                ...state.categories,
                state.categories[action.payload.id] = {
                    ...state.categories[action.payload.id],
                    name : action.payload.data
                }
            ]
        },
        getDetailCategorySlice: (state, action) => {
            state.category = action.payload
        },
        setCategorySearch: (state, action) => {
            state.listSearch = action.payload
        }
    }
})
export const {setCategorySearch,getAllCategorySlice,createCategorySlice,deleteCategorySlice,updateCategorySlice,getDetailCategorySlice} = categorySlice.actions
export default  categorySlice.reducer;
