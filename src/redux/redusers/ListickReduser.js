import {ADD_NEW_LISTICK, DELETE_LISTICK, CHANGE_LISTICK, SELECT_LISTICK, SET_LISTICK_POSSITION, SET_LIST} from "../actions/ListicksAC";

let initialState = {
    listOfListics: []
    //listOfListics: [{id:1, top:50, left: 250, text: "15646"}, 
    //                {id:2, top:100, left: 400, text: "25365"}]
}

const Listick = (state = initialState, action) => {
    const {id, top, left, text} = action;
    let _List = [...state.listOfListics]; //need new massive, or useSelector not work
    let newList = [];
    
    switch(action.type){
        //Loading goods
        case ADD_NEW_LISTICK:  
            let _id = 0;
            for (let x of _List) {
                if (x.id > _id)
                  _id = x.id;
            }
            _id++;
            let _top = 100;
            let _left = 100;
            let find = true;
            while (find === true){
                find = false;
                for (let x of _List) {
                  if (x.left === _left && x.top === _top){
                        _left = _left + 25;
                        _top = _top + 25;
                        find = true;
                     }
                }
            }

            _List.push({id:_id, top:_top, left: _left, text: ""});

            return {...state, listOfListics: _List};
        case DELETE_LISTICK:
            if (id === undefined) 
                return state
            
            newList = _List.filter(l => l.id !== id);  

            return {...state, listOfListics: newList};
        case CHANGE_LISTICK:

            for (let x of _List) {
                if (x.id === id)
                  x.text = text;
            }  
            return {...state, listOfListics: _List};
        case SELECT_LISTICK:
            let _listik;
            for (let x of _List) {
                if (x.id === id)
                _listik = x;
            }

            newList = _List.filter(l => l.id !== id);
            newList.push(_listik);
            return {...state, listOfListics: newList};
        case SET_LISTICK_POSSITION:
            for (let x of _List) {
                if (x.id === id){
                  x.top = top;
                  x.left = left;
                }
            }  
            return {...state, listOfListics: _List}; 
        case SET_LIST:
            return {...state, listOfListics: action.list}; 
        default: return state;
    }
}

export default Listick;