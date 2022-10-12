import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    products: [],
    product: {},
    loading: false,
    listSearch: null,
    productByCate: [],
    productByBrand: [],
    comments:[],
    star: 0

}
const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        getAllProductSlice: (state, action) => {
            state.products = action.payload.reverse()
        },
        createProductSlice: (state, action) => {
            state.products.unshift(action.payload)
            state.loading = false
        },
        deleteProductSlice: (state, action) => {
            state.products = state.products.filter((arrow) => arrow._id !== action.payload)
        },
        updateProductSlice: (state, action) => {
            state.products = state.products.map((item) => {
                if(item._id == action.payload.id) {
                    return action.payload.product
                }
                return item;
            })

        },
        getDetailProductSlice: (state, action) => {
            state.product = action.payload
            state.comments = action.payload.reviewId

        },
        setProductSearch: (state, action) => {
            state.listSearch = action.payload
        },
        getProByCate: (state, action) => {
            state.productByCate = action.payload
        },
        getProByBrand: (state, action) => {
            state.productByBrand = action.payload
        },
        addCommentSlice: (state,action) => {
            state.comments.push( {
                userId:action.payload.user,
                comment:action.payload.comment
            })
        },
        deleteCommentSlice: (state,action) => {
            state.comments.splice(action.payload, 1)
        },
        addStarSlice: (state,action) => {
            state.product = action.payload
        },
        checkStar : (state,action) => {
            state.star = action.payload
        }
    }


})

export const {
    setProductSearch,
    getAllProductSlice,
    createProductSlice,
    deleteProductSlice,
    updateProductSlice,
    getDetailProductSlice,
    getProByCate,
    getProByBrand,
    addCommentSlice,
    deleteCommentSlice,
    addStarSlice,
    checkStar
} = productSlice.actions;
export default productSlice.reducer;
