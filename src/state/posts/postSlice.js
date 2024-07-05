import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const url = 'http://localhost:3000/posts'

const initialState = {
    posts: [],
    status: 'idle',
    error: null
}

export const getPosts = createAsyncThunk('posts/getPosts', async () => {
    try {
        const res = await axios.get(url);
        return res.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
})

export const addPost = createAsyncThunk('posts/addPost', async (data) => {
    try {
        const res = await axios.post(url, data);
        return res.data;
    } catch (error) {
        console.log('Error while adding post', error);
        throw error;
    }
})

export const deletePost = createAsyncThunk('posts/deletePost', async (id) => {
    try {
        const res = await axios.delete(url + '/' + id);
        location.reload();
        return res.data;
    } catch (error) {
        console.log(error);
        throw error
    }
})

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getPosts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getPosts.fulfilled, (state, action) => {
                state.status = 'succeeded',
                    state.posts = action.payload;
            })
            .addCase(getPosts.rejected, (state, action) => {
                state.status = 'Failed';
                state.error = action.error.message;
            })
            .addCase(deletePost.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(deletePost.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.posts = action.payload;
            })
            .addCase(deletePost.rejected, (state, action) => {
                state.error = action.error.message;
            })
            .addCase(addPost.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(addPost.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.posts.push(action.payload);
            })
            .addCase(addPost.rejected, (state, action) => {
                state.error = action.error.message;
            })
    }
})

export default postSlice.reducer;