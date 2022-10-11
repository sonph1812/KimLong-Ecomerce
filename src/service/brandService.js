import {customAxios} from "./tokenHeader";

import {
    getAllBrandSlice,
    deleteBrandSlice,
    createBrandSlice,
    updateBrandSlice,
    getDetailBrandSlice
} from "../reducer/slice/brandSlice";
import Swal from "sweetalert2";



const baseURL = "http://localhost:3000";

export const getAllBrand = async (dispatch) => {
    const res = await customAxios.get(`${baseURL}/brand`)
    dispatch(getAllBrandSlice(res.data))
}
export const createBrand = async (data,dispatch) => {
    const res = await customAxios.post(`${baseURL}/brand`,data)
    dispatch(createBrandSlice(data))
}
export const deleteBrand = async (dispatch,id) => {
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
            const res = await customAxios.delete(`${baseURL}/brand/${id}`)
            dispatch(deleteBrandSlice(id))
            Swal.fire(
                'Xóa!',
                'Bạn Đã Xóa Thành Công.',
                'success'
            )
        }
    })
}
   
export const updateBrand = async (dispatch,props) => {
    customAxios.put(`${baseURL}/brand/${id}`, { name: data }).then((res) => {
    }).catch((err) => {
        console.log(err);
    })
    dispatch(updateBrandSlice({ index, data }));
   
}
