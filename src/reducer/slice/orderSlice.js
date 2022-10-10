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
            state.orders = action.payload
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
        sendOrderSlice: (state,action) => {
            
        }
    }
})
export const {getAllOrderSlice, addOrderSlice, deleteOrderSlice, myOrdersSlice} = orderSlice.actions;
export default orderSlice.reducer