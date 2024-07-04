import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const url = 'http://localhost:3000/user';

const initialState = {
    user: {},
    status: 'idle',
    error: null
};

export const getUser = createAsyncThunk('user/getUser', async () => {
    try {
        const res = await axios.get(url);
        return res.data;
    } catch (err) {
        console.error(err);
        throw err;
    }
});

export const handleSubmit = createAsyncThunk('user/handleSubmit', async ({ email, password }, { getState }) => {
    const { user } = getState().user;
    if (user && user.email === email && user.password === password) {
        const updatedUser = { ...user, isLogged: true };
        try {
            await axios.put(url, updatedUser);
            return updatedUser;
        } catch (err) {
            console.error(err);
            throw err;
        }
    } else {
        throw new Error('Invalid Email or Password');
    }
});

export const logout = createAsyncThunk('user/logout', async (_, { getState }) => {
    const {user} = getState().user;
    const updateUser = {...user, isLogged: false};
    try {
        await axios.put(url, updateUser);
        return updateUser;
    } catch (error) {
        console.error(error);
        throw error;
    }
})

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getUser.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getUser.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.user = action.payload;
            })
            .addCase(getUser.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(handleSubmit.fulfilled, (state, action) => {
                state.user = action.payload;
            })
            .addCase(handleSubmit.rejected, (state, action) => {
                state.error = action.error.message;
            })
            .addCase(logout.fulfilled, (state, action) => {
                state.user = action.payload;
            })
            .addCase(logout.rejected, (state, action) => {
                state.error = action.error.message;
            })
    }
});

export default userSlice.reducer;
