
import { customAxios } from "./tokenHeader";
import {
    getAllUserSlice,
    getAllStaffSlice,
    getDetailUserSlice,
    addStaffSlice,
    deleteUserSlice,
    updateRoleUserSlice,
    updateUserSlice,
    searchUserSlice,
    searchStaffSlice
} from "../reducer/slice/userSlice";

const baseURL = "http://localhost:3000";

export const getAllUser = async (dispatch) => {
    const res = await customAxios.get(`${baseURL}/user`)
    dispatch(getAllUserSlice(res.data))
}
export const getAllStaff = async (dispatch) => {
    const res = await customAxios.get(`${baseURL}/user/staffs`)
    dispatch(getAllStaffSlice(res.data))
}
export const getDetailUser = async (id, dispatch) => {
    const res = await customAxios.get(`${baseURL}/user/${id}`)
    dispatch(getDetailUserSlice(res.data))
}
export const addStaff = async (dispatch) => {
    const res = await customAxios.post(`${baseURL}/user`)
    dispatch(addStaffSlice(res.data))
}
export const deleteUser = async (id, dispatch) => {
    const res = await customAxios.delete(`${baseURL}/user/${id}`)
    dispatch(deleteUserSlice(res.data))
}
export const updateRoleUser = async (id, dispatch) => {
    const res = await customAxios.put(`${baseURL}/user/updateRoleUser/${id}`)
    dispatch(updateRoleUserSlice(res.data))
}
export const updateUser = async (id, dispatch) => {
    const res = await customAxios.put(`${baseURL}/user/${id}`)
    dispatch(updateUserSlice(res.data))
}
export const searchUser = async (data, dispatch) => {
    const res = await customAxios.put(`${baseURL}/user/searchUser,${data}`)
    dispatch(searchUserSlice(res.data))
}
export const searchStaff = async (data, dispatch) => {
    const res = await customAxios.put(`${baseURL}/user/searchStaff,${data}`)
    dispatch(searchStaffSlice(res.data))
}