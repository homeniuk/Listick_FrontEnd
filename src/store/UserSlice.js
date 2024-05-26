import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { UserAPI } from '../api/userAPI.js';

const initialState = {
    email: '',
    token: '',
    error: '',
    isDownloading: false,
    isAuth: false,
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers:{
        logout(state, action){
            state.email = '';
            state.token = '';
            state.isAuth = false;
        },
        cleanError(state, action){
            state.error = '';
        },
        setError(state, action){
            state.error = action.payload.error;
        },
        setToken(state, action){
            state.token = action.payload.token;
        },
    },
    extraReducers: (builder)=>{
        builder
        //Login
        .addCase(loginUser.pending, (state)=> {
            state.isDownloading = true;
            state.error = '';            
        })
        .addCase(loginUser.fulfilled, (state, action)=> {
            state.isDownloading = false;
            if (action.payload.message)
                state.error = action.payload.message
            else {
                state.email = action.payload.user.email;
                state.token = action.payload.accessToken;
                const data = {email: action.payload.user.email, accessToken: action.payload.accessToken};
                localStorage.setItem('user', JSON.stringify(data));
                state.isAuth = true; 
                 
            }           
        })
        .addCase(loginUser.rejected, (state, action)=> {
            state.isDownloading = false;
            if (action.payload.message)
                state.error = action.payload.message    
        })
        //register
        .addCase(registerUser.pending, (state)=> {
            state.isDownloading = true;
            state.error = '';
        })
        .addCase(registerUser.fulfilled, (state, action)=> {
            state.isDownloading = false;
            if (action.payload.message)
                state.error = action.payload.message
            else {
                state.email = action.payload.user.email;
                state.token = action.payload.accessToken;
                const data = {email: action.payload.user.email, accessToken: action.payload.accessToken};
                localStorage.setItem('user', JSON.stringify(data));
                state.isAuth = true;  
            }           
        })
        .addCase(registerUser.rejected, (state, action)=> {
            state.isDownloading = false;
            if (action.payload.message)
                state.error = action.payload.message    
        })
        //LogOut
        .addCase(logoutUser.pending, (state)=> {
            state.isDownloading = true;
            state.error = '';
        })
        .addCase(logoutUser.fulfilled, (state, action)=> {
            state.isDownloading = false;
            if (action.payload.message)
                state.error = action.payload.message
            else {
                state.email = '';
                state.token = '';
                localStorage.removeItem('user');
                state.isAuth = false;  
            }           
        })
        .addCase(logoutUser.rejected, (state, action)=> {
            state.isDownloading = false;
            if (action.payload.message)
                state.error = action.payload.message    
        })
        //getUser
        .addCase(getUser.pending, (state)=> {
            state.isDownloading = true;
            state.error = '';
        })
        .addCase(getUser.fulfilled, (state, action)=> {
            state.isDownloading = false;
            if (action.payload.message)
                state.error = action.payload.message
            else {
                state.email = action.payload.user.email;
                state.token = action.payload.accessToken;
                const data = {email: action.payload.user.email, accessToken: action.payload.accessToken};
                localStorage.setItem('user', JSON.stringify(data));
                state.isAuth = true;  
            }           
        })
        .addCase(getUser.rejected, (state, action)=> {
            state.isDownloading = false;
            localStorage.removeItem('user');
            if (action.payload.message)
                state.error = action.payload.message    
        })

    }
});

export const {logout, setError, cleanError, setToken} = userSlice.actions;

export default userSlice.reducer;

export const loginUser = createAsyncThunk(
    'user/loginUser',
    async function(inputParametr, {rejectWithValue}) {
        try {
            const response = await UserAPI.loginOnServer(inputParametr.email, inputParametr.password);
            return response.data;
        } catch(e) {
            const error = e?.response?.data?.message ?? 'Server error';
            return rejectWithValue({message: error});
        }
    }
);

export const registerUser = createAsyncThunk(
    'user/registerUser',
    async function(inputParametr, {rejectWithValue}) {
        try {
            const response = await UserAPI.registerOnServer(inputParametr.email, inputParametr.password);
            return response.data;
 
        } catch(e) {
            const error = e?.response?.data?.message ?? 'Server error';
            return rejectWithValue({message: error});
        }
    }
);

export const logoutUser = createAsyncThunk(
    'user/logoutUser',
    async function(inputParametr, {rejectWithValue}) {
        try {
            const response = await UserAPI.logoutOnServer();
            return response.data;
 
        } catch(e) {
            const error = e?.response?.data?.message ?? 'Server error';
            return rejectWithValue({message: error});
        }
    }
);

export const getUser = createAsyncThunk(
    'user/getUser',
    async function(inputParametr, {rejectWithValue}) {
        try {
            const response = await UserAPI.getUserOnServer(inputParametr.token);
            return response.data;
 
        } catch(e) {
            const error = e?.response?.data?.message ?? 'Server error';
            return rejectWithValue({message: error});
        }
    }
);