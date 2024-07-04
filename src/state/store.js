import { configureStore } from "@reduxjs/toolkit";
import postsReducer from './posts/postSlice';
import userReducer from './user/userSlice'

export const store = configureStore({
    reducer: {
        posts: postsReducer,
        user: userReducer,
    },
})