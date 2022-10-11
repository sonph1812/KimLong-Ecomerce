import { customAxios } from "./tokenHeader";

import {
    createCategorySlice,
    getAllCategorySlice,
    deleteCategorySlice,
    updateCategorySlice,
    getDetailCategorySlice
} from "../reducer/slice/categorySlice";
import Swal from "sweetalert2";


const baseURL = "http://localhost:3000";

export const getAllCategory = async (dispatch) => {
    const res = await customAxios.get(`${baseURL}/category`)
    dispatch(getAllCategorySlice(res.data))
}
export const createCategory = async (data, dispatch) => {
    const res = await customAxios.post(`${baseURL}/category`, data)
    dispatch(createCategorySlice(data))
}
export const deleteCategory = async (dispatch, id) => {
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
            const res = await customAxios.delete(`${baseURL}/category/${id}`)
            dispatch(deleteCategorySlice(id))
            Swal.fire(
                'Xóa!',
                'Bạn Đã Xóa Thành Công.',
                'success'
            )
        }
    })
}
export const updateCategory = async (id, index, data, dispatch) => {

    customAxios.put(`${baseURL}/category/${id}`, { name: data }).then((res) => {
    }).catch((err) => {
        console.log(err);
    })
    dispatch(updateCategorySlice({ index, data }));
    // if (res){
    //     window.location.reload();
    // }
}
export const getDetailCategory = async (dispatch, id) => {
    const res = await customAxios.get(`${baseURL}/category/${id}`)
    dispatch(getDetailCategorySlice(res.data.category))
}

