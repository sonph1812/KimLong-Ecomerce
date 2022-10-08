import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    cart:{},
    items:[],
    totals:number,

}
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers:{
        getDetailCartSlice: (state,action) => {
            state.totals = action.payload.totals
            state.items = action.payload.itemId
        },
        addItemSlice: (state,action) => {
            state.totals = action.payload.totals
            state.items = action.payload.itemId
        },
        deleteItemSlice: (state,action) => {
            state.totals = action.payload.totals
            state.items = action.payload.itemId
        },
        clearCartSlice: (state, action) => {
            state.totals = action.payload.totals
            state.items = action.payload.itemId
        },
        changeAmountItemSlice: (state,action) => {
           
        }
    }
})
export const {getDetailCartSlice,addItemSlice, deleteItemSlice,clearCartSlice,changeAmountItemSlice} = cartSlice.actions
export default  cartSlice.reducer;