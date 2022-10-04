
import {customAxios} from "./tokenHeader";
import {createProductSlice, deleteProductSlice, getAllProductSlice} from "../reducer/slice/productSlice";
import {createAsyncThunk} from "@reduxjs/toolkit";
const baseURL = "http://localhost:3000";

export const getAllProduct = async (dispatch) => {
    const res = await customAxios.get(`${baseURL}/admin/products`)
    dispatch(getAllProductSlice(res.data))
}
export const getDetailProduct = async (dispatch)=>{
    const  res = await  customAxios.get(`${baseURL}/admin/products/:id`)
dispatch()
}
export const createProduct = async (data,dispatch)=>{
    const res = await customAxios.post(`${baseURL}/admin/products/create`,data)
    dispatch(createProductSlice(res.data));
}
export const deleteProduct = async (dispatch,id)=>{
    const res = await customAxios.delete(`${baseURL}/admin/products/${id}`)
    dispatch(deleteProductSlice(id))
}
export const updateProducts = async (dispatch,id) => {
    const res = await customAxios.put(`${baseURL}/admin/products/${id}`)
    dispatch(updateProducts(id));
}
