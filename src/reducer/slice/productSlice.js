import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    products: [],
    product: {},
    loading: false,
    listSearch: null,
    productByCate: [],
    productByBrand: [],
    comments:[]
}
const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        getAllProductSlice: (state, action) => {
            state.products = action.payload
        },
        createProductSlice: (state, action) => {
            state.products.push(action.payload)
            state.loading = false
        },
        deleteProductSlice: (state, action) => {
            state.products = state.products.filter((arrow) => arrow._id !== action.payload)
        },
        updateProductSlice: (state, action) => {
            state.products = state.products.map((product) => product.id === action.payload.product.id
                ? product = action.payload.product : product)
            console.log(action.payload)
        },
        getDetailProductSlice : (state,action) => {
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
    deleteCommentSlice
} = productSlice.actions;
export default productSlice.reducer;
