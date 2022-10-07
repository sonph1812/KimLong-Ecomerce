import {customAxios} from "./tokenHeader";

import {
    getAllBrandSlice,
    deleteBrandSlice,
    createBrandSlice,
    updateBrandSlice,
    getDetailBrandSlice
} from "../reducer/slice/brandSlice";


const baseURL = "http://localhost:3000";

export const getAllBrand = async (dispatch) => {
    const res = await customAxios.get(`${baseURL}/brand`)
    dispatch(getAllBrandSlice(res.data))
}
export const createBrand = async (data,dispatch) => {
    const res = await customAxios.post(`${baseURL}/brand`)
    dispatch(createBrandSlice(res.data))
}
export const deleteBrand = async (dispatch,id) => {
    const res = await customAxios.delete(`${baseURL}/brand/${id}`)
    dispatch(deleteBrandSlice(id))
}
export const updateBrand = async (dispatch,props) => {
    const res = await customAxios.put(`${baseURL}/brand/${props.id}`,props.brand)
    dispatch(updateBrandSlice())
}