import {
    addItemSlice,
    getDetailCartSlice,
    deleteItemSlice,
    clearCartSlice,
    changeAmountItemSlice,
    changeTotals
} from "../reducer/slice/cartSlice";
import { customAxios } from "./tokenHeader";


const baseURL = "http://localhost:3000";

export const getDetailCart = async (id, dispatch) => {
    const res = await customAxios.get(`${baseURL}/cart/${id}`)
    dispatch(getDetailCartSlice(res.data))
}
export const addItem = async (id, data, dispatch) => {
    const res = await customAxios.put(`${baseURL}/cart/${id}`,
        {
            productId: data.id,
            amount: data.amount
        })
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
export const changeAmountItem = async (id, idItem, data,totals, dispatch) => {
    const res = await customAxios.put(`${baseURL}/cart/${id}/${idItem}`, { data })
    dispatch(changeTotals(res.data))
}