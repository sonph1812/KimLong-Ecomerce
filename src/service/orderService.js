import { getAllOrderSlice, addOrderSlice, deleteOrderSlice, myOrdersSlice, cancelOrderSlice, okOrderSlice } from "../reducer/slice/orderSlice";
// import { socket } from "../socket.io/roomSocket";
import { customAxios } from "./tokenHeader";
const baseURL = "http://localhost:3000";

export const getAllOrder = async (dispatch) => {
    const res = await customAxios.get(`${baseURL}/order`)
    dispatch(getAllOrderSlice(res.data))
}
export const addOrder = async (data, dispatch) => {
    const res = await customAxios.post(`${baseURL}/order`, data)
    dispatch(addOrderSlice(res.data))
}
export const deleteOrder = async (id, index, dispatch) => {
    const res = await customAxios.delete(`${baseURL}/order/${id}`)
    dispatch(deleteOrderSlice(index))
}
export const myOrders = async (idUser, dispatch) => {
    const res = await customAxios.get(`${baseURL}/order/user/${idUser}`)
    dispatch(myOrdersSlice(res.data))

}
export const cancelOrder = async (id,index, dispatch) => {
    const res = await customAxios.put(`${baseURL}/order/cancel/${id}`)
    dispatch(cancelOrderSlice({index}))
}
export const okOrder = async (id,index, dispatch) => {
    const res = await customAxios.put(`${baseURL}/order/ok/${id}`)
    dispatch(okOrderSlice({index}))
}