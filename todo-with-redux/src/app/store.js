import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/TodoSlices";
export const store = configureStore({
    reducer: todoReducer
})