import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    staffs: [],
    users: [],
    user: {},
    userInfo:{}
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
            state.staffs.push(action.payload[0])
        },
        addUserSlice: (state, action) => {
            
            state.users.push(action.payload)
        },
        deleteUserSlice: (state, action) => {
            state.users = state.users.filter((arrow) => arrow._id !== action.payload)
            state.staffs = state.staffs.filter((arrow) => arrow._id !== action.payload)
            console.log('action',action)
        },
        updateRoleUserSlice: (state, action) => {

        },
        updateUserSlice: (state, action) => {

        },
        searchUserSlice: (state, action) => {

        },
        searchStaffSlice: (state, action) => {

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
    logOut
} = userSlice.actions;

export default userSlice.reducer;