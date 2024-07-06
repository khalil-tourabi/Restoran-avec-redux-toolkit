import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addArticle, deleteArticle, getArticles, updateArticle } from "../../service/articleService";

const initialState = {
    posts: [],
    status: 'idle',
    error: null
}

export const getPosts = createAsyncThunk('posts/getPosts', async () => {
    try {
        const res = await getArticles();
        return res.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
})

export const addPost = createAsyncThunk('posts/addPost', async (data) => {
    try {
        const res = await addArticle(data);
        return res.data;
    } catch (error) {
        console.log('Error while adding post', error);
        throw error;
    }
})

export const deletePost = createAsyncThunk('posts/deletePost', async (id) => {
    try {
        await deleteArticle(id);
        return id;
    } catch (error) {
        console.log(error);
        throw error
    }
})

export const updatePost = createAsyncThunk('posts/updatePost', async ({ id, data }) => {
    try {
        const res = await updateArticle(id, data);
        return res.data;
    } catch (error) {
        console.log('There was an error updating the data ', error);
        throw error;
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
                state.posts = state.posts.filter(post => post.id !== action.payload);
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
            .addCase(updatePost.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.posts = state.posts.map(post =>
                    post.id === action.payload.id ? action.payload : post
                );
            })
            .addCase(updatePost.rejected, (state, action) => {
                state.error = action.error.message;
            })

    }
})

export default postSlice.reducer;