import {createSlice} from "@reduxjs/toolkit";
const initialState = {
    orders:[],
    order:{},
    listOrder:null
}
const orderSlice = createSlice({
    name: "orders",
    initialState,
    reducers:{
        getAllOrderSlice:(state,action)=>{
            state.orders = action.payload.reverse()
        },
        addOrderSlice : (state,action) => {
            state.order = action.payload
        },
        deleteOrderSlice: (state, action) => {
            state.orders.splice(action.payload,1)
        },
        myOrdersSlice: (state, action) =>{
            state.orders = action.payload
        },
        cancelOrderSlice : (state, action) => {
            state.orders[action.payload.index] = {
                ...state.orders[action.payload.index],
                status: 'cancel'
            }
        },
        okOrderSlice : (state,action) => {
            state.orders[action.payload.index] = {
                ...state.orders[action.payload.index],
                status: 'ok'
            }
        }
    }
})
export const {cancelOrderSlice,okOrderSlice, getAllOrderSlice, addOrderSlice, deleteOrderSlice, myOrdersSlice} = orderSlice.actions;
export default orderSlice.reducer