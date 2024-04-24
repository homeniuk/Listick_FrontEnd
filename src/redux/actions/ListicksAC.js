export const ADD_NEW_LISTICK = 'ADD_NEW_LISTICK';
export const DELETE_LISTICK  = 'DELETE_LISTICK';
export const MOVE_LISTICK    = 'MOVE_LISTICK';

//Loading
export const addNewListick = ()=>({
    type: ADD_NEW_LISTICK,
})

export const deleteListick = (id)=>({
    type: DELETE_LISTICK,
    id
})

export const moveListick = (id, top, left)=>({
    type: MOVE_LISTICK,
    id,
    top,
    left
})