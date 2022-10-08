import { addItemSlice, getDetailCartSlice } from "../reducer/slice/cartSlice";
import {customAxios} from "./tokenHeader";


const baseURL = "http://localhost:3000";

export const getDetailCart = async (id,dispatch) => {
    const res = await customAxios.get(`${baseURL}/cart/${id}`)
    dispatch(getDetailCartSlice(res.data))
}
export const addItem = async (id,data,dispatch) => {
    const res = await customAxios.put(`${baseURL}/cart/${id}`,data)
    dispatch(addItemSlice(res.data))
}