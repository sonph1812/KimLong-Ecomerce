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
        },
        myOrdersSlice: (state, action) =>{
            state.orders = action.payload
        }
    }
})
export const {getAllOrderSlice, addOrderSlice, deleteOrderSlice, myOrdersSlice} = orderSlice.actions;
export default orderSlice.reducer