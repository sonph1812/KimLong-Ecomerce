import {
    addItemSlice,
    getDetailCartSlice,
    deleteItemSlice,
    clearCartSlice,
    changeAmountItemSlice
} from "../reducer/slice/cartSlice";
import { customAxios } from "./tokenHeader";


const baseURL = "http://localhost:3000";

export const getDetailCart = async (id, dispatch) => {
    const res = await customAxios.get(`${baseURL}/cart/${id}`)
    dispatch(getDetailCartSlice(res.data))
}
export const addItem = async (id, data, dispatch) => {
    const res = await customAxios.put(`${baseURL}/cart/${id}`, data)
    dispatch(addItemSlice(res.data))
}
export const deleteItem = async (id, idItem, dispatch) => {
    const res = await customAxios.delete(`${baseURL}/cart/${id}/${idItem}`)
    dispatch(deleteItemSlice(res.data))
}
export const clearCart = async (id, dispatch) => {
    const res = await customAxios.delete(`${baseURL}/cart/${id}`)
    dispatch(clearCartSlice(res.data))
}
export const changeAmountItem = async (id, idItem,data, dispatch) => {
    const res = await customAxios.put(`${baseURL}/cart/${id}/${idItem}`,data)
    dispatch(changeAmountItemSlice(data))
}