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
    getUserInfo
} = userSlice.actions;

export default userSlice.reducer;