import {customAxios} from "./tokenHeader";
import {
    createProductSlice,
    deleteProductSlice,
    getAllProductSlice,
    getDetailProductSlice,
    updateProductSlice, getProByCate, getProByBrand,

} from "../reducer/slice/productSlice";
import Swal from "sweetalert2";


const baseURL = "http://localhost:3000";

export const getAllProduct = async (dispatch) => {
    const res = await customAxios.get(`${baseURL}/admin/products`)
    dispatch(getAllProductSlice(res.data))
}
export const getDetailProduct = async (dispatch,id) => {
    const res = await customAxios.get(`${baseURL}/admin/products/${id}`)
        dispatch(getDetailProductSlice(res.data))

}
export const createProduct = async (data, dispatch) => {
    const res = await customAxios.post(`${baseURL}/admin/products/create`,data)
    dispatch(createProductSlice(res.data));
}
export const deleteProduct = async (dispatch, id) => {
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
            const res = await customAxios.delete(`${baseURL}/admin/products/${id}`)
            dispatch(deleteProductSlice(id))
            Swal.fire(
                'Xóa!',
                'Bạn Đã Xóa Thành Công.',
                'success'
            )
        }
    })
}
export const updateProducts = async (dispatch, props) => {
    const res = await customAxios.put(`${baseURL}/admin/products/${props.id}`,props.product)
    dispatch(updateProductSlice());
}
export const getProductByCate = async (dispatch,id) => {
    const res = await customAxios.get(`${baseURL}/admin/filterByCategory/${id}`)
    dispatch(getProByCate(res.data))
}
export const getProductByBrand = async (dispatch,id) => {
    const res = await customAxios.get(`${baseURL}/admin/filterByBrand/${id}`)
    dispatch(getProByBrand(res.data))
}
