import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    cart:{},
    items:[],
    totals:0,
    cartId : ''

}
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers:{
        getDetailCartSlice: (state,action) => {
            state.cartId = action.payload._id
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
            state.totals = action.payload.totals
           
        }
    }
})
export const {getDetailCartSlice,addItemSlice, deleteItemSlice,clearCartSlice,changeAmountItemSlice} = cartSlice.actions
export default  cartSlice.reducer;