import { customAxios } from "./tokenHeader";
import {
    getAllChatSlice,
    getDetailChatSlice,
    addChatSlice,
    addMessageSlice
} from "../reducer/slice/chatSlice"

const baseURL = "http://localhost:3000";

export const getAllChat = async (dispatch) => {
    const res = await customAxios.get(`${baseURL}/chat`)
    dispatch(getAllChatSlice(res.data))
}
export const getDetailChat = async (id, dispatch) => {
    const res = await customAxios.get(`${baseURL}/chat/${id}`)
    dispatch(getDetailChatSlice(res.data))
}
export const addChat = async (data, dispatch) => {
    const res = await customAxios.post(`${baseURL}/chat`, data)
    dispatch(addChatSlice(res.data))
}
export const addMessage = async (data, dispatch) => {
    const res = await customAxios.put(`${baseURL}/chat/${data.id}`, data.message)
    dispatch(addMessageSlice(data.message))
}