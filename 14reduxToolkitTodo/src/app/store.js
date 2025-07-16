// app/store.js
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";

// configureStore wraps Redux's createStore with good defaults:
// • Automatically applies redux-thunk middleware,
// • Enables Redux DevTools,
// • Checks for immutable updates and serializable data :contentReference[oaicite:1]{index=1}.
export const store = configureStore({
    reducer: todoReducer
    // You can pass an object here if you have multiple slices:
    // reducer: { todos: todoReducer, user: userReducer }
});

