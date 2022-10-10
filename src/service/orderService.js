import { getAllOrderSlice, addOrderSlice , deleteOrderSlice,myOrdersSlice} from "../reducer/slice/orderSlice";
import {customAxios} from "./tokenHeader";
const baseURL = "http://localhost:3000";

export const getAllOrder = async (dispatch) => {
    const res = await customAxios.get(`${baseURL}/order`)
    dispatch(getAllOrderSlice(res.data))
}
export const addOrder = async (data,dispatch) => {
    const res = await customAxios.post(`${baseURL}/order`, data)
    console.log(res.data);
    dispatch(addOrderSlice(res.data))
}
export const deleteOrder = async (id,dispatch) => {
    const res = await customAxios.delete(`${baseURL}/order/${id}`)
    dispatch(deleteOrderSlice(res.data))
}
export const myOrders = async (idUser, dispatch) => {
    const res = await customAxios.get(`${baseURL}/order/user/${id}`)
    dispatch(myOrdersSlice(res.data))

}