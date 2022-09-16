import { configureStore } from "@reduxjs/toolkit";
import modalReducer from './feature/modal/modal-slide';
import userReducer from "./feature/user/user-slide"

export const store = configureStore({
    reducer: {
        modal: modalReducer,
        user:  userReducer
    },
});
