import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen: false,
    data:""
};
export const modalSlide = createSlice({
    name: "modal",
    initialState,
    reducers: {
        openModal: (state, action) => {
            state.isOpen = true;
        },
        closeModal: (state, action) => {
            state.isOpen = false;
        },cevap: (state, action) => {
            state.data = action.payload;
        },
    },
});

export const { openModal, closeModal,cevap } = modalSlide.actions;
export default modalSlide.reducer;
