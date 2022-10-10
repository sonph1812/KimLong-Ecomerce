import {createSlice} from "@reduxjs/toolkit";
const initialState = {
    orders:[],
    myOrders:[],
    order:{},
    listOrder:null
}
const orderSlice = createSlice({
    name: "orders",
    initialState,
    reducers:{
        getAllOrderSlice:(state,action)=>{
            state.orders = action.payload
        }
    }
})
export const {getAllOrderSlice} = orderSlice.actions;
export default orderSlice.reducer