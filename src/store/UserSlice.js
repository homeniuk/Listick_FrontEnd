import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { UserAPI } from '../api/userAPI.js';

const userSlice = createSlice({
    name: "user",
    initialState: {
        email: '',
        token: '',
        isAuth: false,
    },
    reducers:{
        logout(state, action){
            state.email = '';
            state.token = '';
        }
    },
    extraReducers: (builder)=>{
        builder
        //Login
        .addCase(loginUser.pending, (state)=> {
            state.isAuth = false;     
        })
        .addCase(loginUser.fulfilled, (state, action)=> {
            state.email = action.payload.user.email;
            state.token = action.payload.accessToken;
            state.isAuth = true;          
        })
        .addCase(loginUser.rejected, (state, action)=> {
            state.isAuth = false;   
        })
    }
});

export const {loginSuccess,
    logout, 
    } = userSlice.actions;

export default userSlice.reducer;

export const loginUser = createAsyncThunk(
    'user/loginUser',
    async function(inputParametr, {rejectWithValue}) {
        try {
            const response = await UserAPI.loginOnServer(inputParametr.email, inputParametr.password);
            return response.data;
 
        } catch(e) {
            return rejectWithValue('Server error');
        }
    }
);
