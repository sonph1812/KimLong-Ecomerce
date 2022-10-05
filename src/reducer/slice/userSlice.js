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
            state.staffs.push(action.payload)
        },
        addUserSlice: (state, action) => {
            state.users.push(action.payload)
        },
        deleteUserSlice: (state, action) => {
            if (action.payload.model == "staff") {
               state.staffs.splice(action.payload.index,1)
            //    state.staffs = state.staffs.filter((arrow) => arrow._id !== action.payload)
            }
            if (action.payload.model == "user") {
                state.users.splice(action.payload.index,1)
                // state.users = state.users.filter((arrow) => arrow._id !== action.payload)
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