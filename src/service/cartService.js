import {
    addItemSlice,
    getDetailCartSlice,
    deleteItemSlice,
    clearCartSlice,
    changeInAddToCart,
    changeTotals
} from "../reducer/slice/cartSlice";
import { customAxios } from "./tokenHeader";


const baseURL = "http://localhost:3000";

export const getDetailCart = async (id, dispatch) => {
    const res = await customAxios.get(`${baseURL}/cart/${id}`)
    dispatch(getDetailCartSlice(res.data))
}
export const addItem = (id, data, dispatch, navigate) => {

    customAxios.put(`${baseURL}/cart/${id}`,
        {
            productId: data.id,
            amount: data.amount
        }).then((res) => {
            dispatch(addItemSlice(res.data))
            navigate('/cart')

        }).catch((err) => {
            alert('You must login')
            // dispatch(addItemSlice(err.data.status))
        })

}
export const deleteItem = async (id, idItem, dispatch) => {
    const res = await customAxios.delete(`${baseURL}/cart/${id}/${idItem}`)
    dispatch(deleteItemSlice(res.data))
}
export const clearCart = async (id, dispatch) => {
    const res = await customAxios.delete(`${baseURL}/cart/${id}`)
    dispatch(clearCartSlice(res.data))
}
export const changeAmountItem = async (id, idItem, data, totals, dispatch, navigate) => {
    const res = await customAxios.put(`${baseURL}/cart/${id}/${idItem}`, { data })
    if (navigate) {
        dispatch(changeInAddToCart({ idItem, data, totals }))
        navigate('/cart')
    } else {
        dispatch(changeTotals(totals))
    }
}