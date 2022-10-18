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
        getDetailChatSlice: (state, action) => {
            state.chat = action.payload
        },
        addChatSlice: (state,action) => {
            console.log(action.payload);
            state.chat = action.payload
        },
        addMessageSlice: (state,action) => {
            state.chat.message.push(action.payload)
        }

    }
})
export const {
    getAllChatSlice,
    getDetailChatSlice,
    addChatSlice,
    addMessageSlice
} = chatSlice.actions;
export default chatSlice.reducer