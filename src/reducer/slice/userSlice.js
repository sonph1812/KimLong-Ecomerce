import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    staffs: [],
    users: [],
    user: {},
    userInfo:{},
    listSearch:null
}
const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        logOut : (state,action) => {
            state.userInfo = {}
            localStorage.clear()
            
        },
        getUserInfo: (state, action) => {
            state.userInfo = action.payload
        },
        getAllStaffSlice: (state, action) => {
            state.staffs = action.payload
        },
        getAllUserSlice: (state, action) => {
            state.users = action.payload
        },
        getDetailUserSlice: (state, action) => {
            state.user = action.payload
        },
        addStaffSlice: (state, action) => {
        },
        deleteUserSlice: (state, action) => {
            if (action.payload.model == "staff") {
               state.staffs.splice(action.payload.index,1)
            }
            if (action.payload.model == "user") {
                state.users.splice(action.payload.index,1)
            }

        },
        updateRoleUserSlice: (state, action) => {

        },
        updateUserSlice: (state, action) => {

        },
        searchUserSlice: (state, action) => {

        },
        searchStaffSlice: (state, action) => {

        },
        setListSearch: (state,action) => {
            state.listSearch = action.payload
            
        }
    }
})

export const {
    getAllUserSlice,
    getAllStaffSlice,
    getDetailUserSlice,
    addStaffSlice,
    deleteUserSlice,
    updateRoleUserSlice,
    updateUserSlice,
    searchUserSlice,
    searchStaffSlice,
    getUserInfo,
    logOut,
    setListSearch
} = userSlice.actions;

export default userSlice.reducer;