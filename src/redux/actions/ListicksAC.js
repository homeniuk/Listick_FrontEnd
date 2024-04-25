export const ADD_NEW_LISTICK = 'ADD_NEW_LISTICK';
export const DELETE_LISTICK  = 'DELETE_LISTICK';
export const MOVE_LISTICK    = 'MOVE_LISTICK';
export const CHANGE_LISTICK    = 'CHANGE_LISTICK';
export const SELECT_LISTICK  = 'SELECT_LISTICK';
export const SET_LISTICK_POSSITION  = 'SET_LISTICK_POSSITION';
export const SET_LIST  = 'SET_LIST';


export const addNewListick = ()=>({
    type: ADD_NEW_LISTICK,
})

export const deleteListick = (id)=>({
    type: DELETE_LISTICK,
    id
})
export const selectListick = (id)=>({
    type: SELECT_LISTICK,
    id
})

export const changeListick = (id, text)=>({
    type: CHANGE_LISTICK,
    id,
    text
})

export const setListickPossition = (id, top, left)=>({
    type: SET_LISTICK_POSSITION,
    id,
    top,
    left
})

export const setList = (list)=>({
    type: SET_LIST,
    list
})
