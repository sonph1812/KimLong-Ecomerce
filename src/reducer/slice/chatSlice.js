import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    chats: [],
    chat: {}
}
const chatSlice = createSlice({
    name: 'chats',
    initialState,
    reducers: {
        getAllChatSlice: (state, action) => {
            state.chats = action.payload
        },
        getDetailSlice: (state, action) => {
            state.chat = action.payload
        },

    }
})
export const {
    getAllChatSlice,
    getDetailChatSlice
} = chatSlice.actions;
export default chatSlice.reducer