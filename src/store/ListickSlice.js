import { createSlice, createAsyncThunk  } from '@reduxjs/toolkit';
import { ListickAPI } from '../api/listicAPI.js';

const listicksSlice = createSlice({
    name: "listicks",
    initialState: {
        listOfListics: [],
        isDownloading: false,
    },
    reducers:{
        addNewListick(state, action){
            let _id = 0;
            for (let x of state.listOfListics) {
                if (x.id > _id)
                  _id = x.id;
            }
            _id++;
            let _top = 100;
            let _left = 100;
            let find = true;
            while (find === true){
                find = false;
                for (let x of state.listOfListics) {
                  if (x.left === _left && x.top === _top){
                        _left = _left + 25;
                        _top = _top + 25;
                        find = true;
                     }
                }
            }

            state.listOfListics.push({id:_id, top:_top, left: _left, text: ""});
        },
        deleteListick(state, action){
            if (action.payload === undefined) 
                return;
            
            const newList = state.listOfListics.filter(l => l.id !== action.payload.id);  

            state.listOfListics = newList;
        },
        changeListick(state, action){
            for (let x of state.listOfListics) {
                if (x.id === action.payload.id)
                  x.text = action.payload.text;
            }
        },
        selectListick(state, action){
            let _listik;
            for (let x of state.listOfListics) {
                if (x.id === action.payload.id)
                _listik = x;
            }

            const newList = state.listOfListics.filter(l => l.id !== action.payload.id);
            newList.push(_listik);
            state.listOfListics = newList;
        },
        setListickPosition(state, action){
            for (let x of state.listOfListics) {
                if (x.id === action.payload.id){
                  x.top = action.payload.top;
                  x.left = action.payload.left;
                }
            }  
        },
        clearList(state, action){
            state.listOfListics = [];
        }
        /*setList(state, action){
            state.listOfListics = action.payload.id;
        }*/
    },
    extraReducers: (builder)=>{
        builder
        //getAllListicks
        .addCase(getAllListicks.pending, (state)=> {
            state.isDownloading = true;
            state.error = '';
        })
        .addCase(getAllListicks.fulfilled, (state, action)=> {
            state.isDownloading = false;
            state.listOfListics = action.payload;
        })
        .addCase(getAllListicks.rejected, (state, action)=> {
            state.isDownloading = false;
            if (action.payload.message)
                state.error = action.payload.message    
        })
        //saveAllListicks
        .addCase(saveAllListicks.pending, (state)=> {
            state.isDownloading = true;
            state.error = '';
        })
        .addCase(saveAllListicks.fulfilled, (state, action)=> {
            state.isDownloading = false;
            //state.listOfListics = action.payload;
        })
        .addCase(saveAllListicks.rejected, (state, action)=> {
            state.isDownloading = false;
            if (action.payload.message)
                state.error = action.payload.message    
        })
        //saveListick
        .addCase(saveListick.pending, (state)=> {
            state.isDownloading = true;
            state.error = '';
        })
        .addCase(saveListick.fulfilled, (state, action)=> {
            state.isDownloading = false;
            //state.listOfListics = action.payload;
        })
        .addCase(saveListick.rejected, (state, action)=> {
            state.isDownloading = false;
            if (action.payload.message)
                state.error = action.payload.message    
        })
        //removeListick
        .addCase(removeListick.pending, (state)=> {
            state.isDownloading = true;
            state.error = '';
        })
        .addCase(removeListick.fulfilled, (state, action)=> {
            state.isDownloading = false;
            //state.listOfListics = action.payload;
        })
        .addCase(removeListick.rejected, (state, action)=> {
            state.isDownloading = false;
            if (action.payload.message)
                state.error = action.payload.message    
        })
    }
});

export const {addNewListick, 
    deleteListick, 
    changeListick, 
    selectListick,
    setListickPosition,
    clearList,    } = listicksSlice.actions;

export default listicksSlice.reducer;

export const getAllListicks = createAsyncThunk(
    'listicks/getAllListicks',
    async function(inputParametr, {rejectWithValue}) {
        try {
            const response = await ListickAPI.getAllListicksOnServer(inputParametr.token);
            return response.data;
 
        } catch(e) {
            return rejectWithValue('Server error');
        }
    }
);

export const saveAllListicks = createAsyncThunk(
    'listicks/saveAllListicks',
    async function(inputParametr, {rejectWithValue}) {
        try {
            const response = await ListickAPI.saveAllListicksOnServer(inputParametr.List);
            return response.data;
 
        } catch(e) {
            return rejectWithValue('Server error');
        }
    }
);

export const saveListick = createAsyncThunk(
    'listicks/saveListick',
    async function(inputParametr, {rejectWithValue}) {
        try {
            const response = await ListickAPI.saveListickOnServer(inputParametr.listick);
            return response.data;
 
        } catch(e) {
            return rejectWithValue('Server error');
        }
    }
);

export const removeListick = createAsyncThunk(
    'listicks/removeListick',
    async function(inputParametr, {rejectWithValue}) {
        try {
            const response = await ListickAPI.deleteListickOnServer(inputParametr.id);
            return response.data;
 
        } catch(e) {
            return rejectWithValue('Server error');
        }
    }
);
