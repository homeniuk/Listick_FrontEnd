import {ADD_NEW_LISTICK, DELETE_LISTICK, MOVE_LISTICK} from "../actions/ListicksAC";

let initialState = {
    //listOfListics: []
    listOfListics: [{id:1, top:50, left: 250, text: "15646"}, 
                    {id:2, top:100, left: 400, text: "25365"}],
    update: false
}

const Listick = (state = initialState, action) => {
    switch(action.type){
        //Loading goods
        case ADD_NEW_LISTICK:
            let _List = [...state.listOfListics];   //need new massive!!! or useSelector not work
            let _id = 0;
            for (let x of _List) {
                if (x.id > _id)
                  _id = x.id;
            }
            _id++;
            let _top = 100;
            let _left = 100;
            for (let x of _List) {
                if (x.left === _left && x.top === _top)
                _left = _left + 20;
                _top = _top + 20;
            }

            _List.push({id:_id, top:_top, left: _left, text: "new"});

            return {...state, listOfListics: _List, update: true};
/*       case DELETE_LISTICK:
            return {...state, goods: []};
        case MOVE_LISTICK:
            const {listOfListics} = action;
            return {...state, listOfListics: listOfListics}; */

        default: return state;
    }
}

export default Listick;