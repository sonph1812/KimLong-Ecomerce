import {customAxios} from "./tokenHeader";
import {
    filterProduct,
    createProductSlice,
    deleteProductSlice,
    getAllProductSlice,
    getDetailProductSlice,
    updateProductSlice, getProByCate, getProByBrand,

} from "../reducer/slice/productSlice";


const baseURL = "http://localhost:3000";

export const getAllProduct = async (dispatch) => {
    const res = await customAxios.get(`${baseURL}/admin/products`)
    dispatch(getAllProductSlice(res.data))
}
export const getDetailProduct = async (dispatch, id) => {
    console.log(id)
    const res = await customAxios.get(`${baseURL}/admin/products/${id}`)
    dispatch(getDetailProductSlice(res.data.product))
}
export const createProduct = async (data, dispatch) => {
    const res = await customAxios.post(`${baseURL}/admin/products/create`,data)
    dispatch(createProductSlice(res.data));
}
export const deleteProduct = async (dispatch, id) => {
    const deleteConfirm = window.confirm('Bạn muốn xóa chứ!!!')
    if(deleteConfirm){
        const res = await customAxios.delete(`${baseURL}/admin/products/${id}`)
        dispatch(deleteProductSlice(id))
    }
}
export const updateProducts = async (dispatch, props) => {
    const res = await customAxios.put(`${baseURL}/admin/products/${props.id}`,props.product)
    dispatch(updateProductSlice());
    if (res){
        window.location.reload();
    }
}
export const getProductByCate = async (dispatch) => {
    const res = await customAxios.get(`${baseURL}/admin/filterByCategory/63351fd083ce9c34ebdee0fb`)
    dispatch(getProByCate(res.data))
}
export const getProductByBrand = async (dispatch) => {
    const res = await customAxios.get(`${baseURL}/admin/filterByBrand/63412ee41284300171ff611b`)
    dispatch(getProByBrand(res.data))
}
