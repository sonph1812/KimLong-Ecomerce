
import { customAxios } from "./tokenHeader";
import {
    getAllUserSlice,
    getAllStaffSlice,
    getDetailUserSlice,
    addStaffSlice,
    addUserSlice,
    deleteUserSlice,
    updateRoleUserSlice,
    updateUserSlice,
    searchUserSlice,
    searchStaffSlice
} from "../reducer/slice/userSlice";
import Swal from "sweetalert2";

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
export const addStaff = async (data,dispatch) => {
    const res = await customAxios.post(`${baseURL}/user`,data)
    dispatch(addStaffSlice(res.data))
}
export const addUser = async (data,dispatch) => {
    const res = await customAxios.post(`${baseURL}/user`, data)
    dispatch(addUserSlice(res.data))
}
export const deleteUser = async (id,dispatch) => {
    Swal.fire({
        title: 'Bạn Muốn Xóa Chứ?',
        text: "Hãy Suy Nghĩ Cẩn Thận Khi Xóa!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Vâng, Xóa Đi!'
    }).then(async (result) => {
        if (result.isConfirmed) {
            const res = await customAxios.delete(`${baseURL}/user/${id}`)
            dispatch(deleteUserSlice(id))
            Swal.fire(
                'Xóa!',
                'Bạn Đã Xóa Thành Công.',
                'success'
            )
        }
    })
}
export const updateRoleUser = async (id, dispatch) => {
    const res = await customAxios.put(`${baseURL}/user/updateRoleUser/${id}`)
    dispatch(updateRoleUserSlice(res.data))
}
export const updateUser = async (id,data, dispatch) => {
    const res = await customAxios.put(`${baseURL}/user/update/${id}`,data)
    dispatch(updateUserSlice(res.data))
    console.log('res.data',res.data);
}
export const searchUser = async (data, dispatch) => {
    const res = await customAxios.get(`${baseURL}/user/searchUser/${data}`)
    dispatch(searchUserSlice(res.data))
}
export const searchStaff = async (data, dispatch) => {
    const res = await customAxios.get(`${baseURL}/user/searchStaff/${data}`)
    dispatch(searchStaffSlice(res.data))
}