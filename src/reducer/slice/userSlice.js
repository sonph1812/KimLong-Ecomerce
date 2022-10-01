import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [],
    user:{}
}
const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        getAllStaffSlice:(state,action) => {
            state.users = action.payload
        },
        getAllUserSlice: (state, action) => {
            state.users = action.payload
        },
        getDetailUserSlice:(state, action) => {
            state.user = action.payload
        },
        addStaffSlice:(state, action) => {
            
        },
        deleteUserSlice:(state, action) => {
            
        },
        updateRoleUserSlice:(state, action) => {
            
        },
        updateUserSlice:(state, action) => {
            
        },
        searchUserSlice:(state, action) => {
            
        },
        searchStaffSlice:(state, action) => {
            
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
    searchStaffSlice
} = userSlice.actions;

export default userSlice.reducer;