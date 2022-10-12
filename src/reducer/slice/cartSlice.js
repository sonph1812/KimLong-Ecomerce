import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: {},
    items: [],
    totals: 0,
    cartId: ''

}
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        getDetailCartSlice: (state, action) => {
            state.cart = action.payload.reverse()
            state.cartId = action.payload._id
            state.totals = action.payload.totals
            state.items = action.payload.itemId
        },
        addItemSlice: (state, action) => {
            state.totals = action.payload.totals
            state.items = action.payload.itemId
        },
        deleteItemSlice: (state, action) => {
            state.totals = action.payload.totals
            state.items = action.payload.itemId
        },
        clearCartSlice: (state, action) => {
            state.totals = action.payload.totals
            state.items = action.payload.itemId
        },
        changeTotals: (state, action) => {
            state.totals = state.totals - action.payload.oldTotal + action.payload.newTotal
        },
        changeInAddToCart: (state, action) => {
            let array = []
            for (let item of state.items) {
                if (item._id == action.payload.idItem) {
                    let item1 = {
                        ...item,
                        amount: action.payload.data,
                        total: action.payload.totals.newTotal
                    }
                    array.push(item1)
                } else {
                    array.push(item)
                }
            }
            state.items = array
            state.totals = state.totals - action.payload.totals.oldTotal + action.payload.totals.newTotal
        }

    }
})
export const { changeInAddToCart, getDetailCartSlice, addItemSlice, deleteItemSlice, clearCartSlice, changeAmountItemSlice, changeTotals } = cartSlice.actions
export default cartSlice.reducer;