import {customAxios} from "./tokenHeader";

import {createCategorySlice,
    getAllCategorySlice,
    deleteCategorySlice,
    updateCategorySlice,
    getDetailCategorySlice
} from "../reducer/slice/categorySlice";


const baseURL = "http://localhost:3000";

export const getAllCategory = async (dispatch) => {
    const res = await customAxios.get(`${baseURL}/category`)
    dispatch(getAllCategorySlice(res.data))
}
export const createCategory = async (data,dispatch) =>{
    const res = await customAxios.post(`${baseURL}/category`,data)
    dispatch(createCategorySlice(res.data))
}
export const deleteCategory = async (dispatch,id) => {
    const res = await customAxios.delete(`${baseURL}/category/${id}`)
    dispatch(deleteCategorySlice(id))
}
export const updateCategory = async (dispatch, props) => {
    const res = await customAxios.put(`${baseURL}/category${props.id}`,props.category)
    dispatch(updateCategorySlice())
}

