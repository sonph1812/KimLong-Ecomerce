import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    staffs: [],
    users: [],
    user: {},
    userInfo:{},
    listSearch:null,
    staffSearch:null,
    isLogin: false
}
const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        logOut : (state,action) => {
            state.isLogin = false
            state.userInfo = {}
            localStorage.clear()
            
        },
        isLogin : (state,action) => {
            state.isLogin = true
        },

        getUserInfo: (state, action) => {
            state.userInfo = action.payload
        },
        getAllStaffSlice: (state, action) => {
            state.staffs = action.payload.reverse()
        },
        getAllUserSlice: (state, action) => {
            state.users = action.payload.reverse()
        },
        getDetailUserSlice: (state, action) => {
            state.user = action.payload
        },
        addStaffSlice: (state, action) => {
            state.staffs.unshift(action.payload[0])
            console.log('actionne',action)
        },
        addUserSlice: (state, action) => {
            
            state.users.push(action.payload)
        },
        deleteUserSlice: (state, action) => {
            state.users = state.users.filter((arrow) => arrow._id !== action.payload)
            state.staffs = state.staffs.filter((arrow) => arrow._id !== action.payload)
        },
        updateRoleUserSlice: (state, action) => {

        },
        updateUserSlice: (state, action) => {
            state.userInfo = action.payload.user
            console.log('action',action.payload.user);
        },
        searchUserSlice: (state, action) => {

        },
        searchStaffSlice: (state, action) => {

        },
        setListSearch: (state,action) => {
            state.listSearch = action.payload
        },
        setStaffSearch: (state,action) => {
            state.staffSearch = action.payload
        }

    }
})

export const {
    getAllUserSlice,
    getAllStaffSlice,
    getDetailUserSlice,
    addStaffSlice,
    addUserSlice,
    deleteUserSlice,
    updateRoleUserSlice,
    updateUserSlice,
    searchUserSlice,
    searchStaffSlice,
    getUserInfo,
    logOut,
    setListSearch,
    setStaffSearch,
    isLogin
} = userSlice.actions;

export default userSlice.reducer;