import { getAllOrderSlice } from "../reducer/slice/orderSlice";
import {customAxios} from "./tokenHeader";
const baseURL = "http://localhost:3000";

export const getAllOrder = async (dispatch) => {
    const res = await customAxios.get(`${baseURL}/order`)
    dispatch(getAllOrderSlice(res.data))
}