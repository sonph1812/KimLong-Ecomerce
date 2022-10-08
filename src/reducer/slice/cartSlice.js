import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    cart:{},
    items:[]
}
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers:{
        getDetailCartSlice: (state,action) => {
            state.cart = action.payload
            state.items = action.payload.itemId
        },
        addItemSlice: (state,action) => {
            state.cart = action.payload
            state.items = action.payload.itemId
        }
    }
})
export const {getDetailCartSlice,addItemSlice} = cartSlice.actions
export default  cartSlice.reducer;