import { createSlice } from '@reduxjs/toolkit';

const listicksSlice = createSlice({
    name: "listicks",
    initialState: {
        listOfListics: []
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
        setList(state, action){
            state.listOfListics = action.payload.id;
        }
    }
});

export const {addNewListick, 
    deleteListick, 
    changeListick, 
    selectListick,
    setListickPosition,
    setList } = listicksSlice.actions;

export default listicksSlice.reducer;

