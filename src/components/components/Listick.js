import {deleteListick, changeListick, selectListick, setListickPosition, saveListick, removeListick} from '../../store/ListickSlice';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

function Listick(props) {
  const id = props.id;
  const dispatch = useDispatch();

  const [diff, setdiff] = useState({dTop:0, dLeft:0});
  const [timeoutId, setTimeoutId] = useState(null);

  const divStyle = {
    top: ''+ props.top + 'px',
    left: ''+ props.left + 'px',
  };

  function closeListick() {
    dispatch(deleteListick({id}));
    dispatch(removeListick({id}));
  }
  function changeText(text) {
    dispatch(changeListick({id, text}));

    clearTimeout(timeoutId);
    const timeoutId_ = setTimeout(() => {
      sendDataToServer(text);
    }, 1000);
    setTimeoutId(timeoutId_);
  }

  const sendDataToServer = (data) => {
    const listick = {id, top:props.top, left:props.left, text:data};
    dispatch(saveListick({listick}));
  }

  function select() {
    dispatch(selectListick({id}));
  }
  function onDragStart(e) {
    let x = e.clientX;
    let y = e.clientY;
    let dTop = props.top - y;
    let dLeft = props.left - x;
    setdiff({dTop:dTop, dLeft:dLeft})
  }
  function onDrag(e) {      //To slowly
    //let x = e.clientX;
    //let y = e.clientY;
    //if (x===0 && y===0)
    //  return;
    //dispatch(setListickPosition({id, top: y + diff.dTop, left: x + diff.dLeft}));    
  }
  function onDragEnd(e) {
    let x = e.clientX;
    let y = e.clientY;
    const top = y + diff.dTop;
    const left = x + diff.dLeft;
    dispatch(setListickPosition({id, top, left}));
    const listick = {id, top, left, text:props.text};
    dispatch(saveListick({listick}));
  }

  return (
    <div style={divStyle} className="w-40 h-40 absolute" draggable = {true} 
          onDragStart={(e) => onDragStart(e)}
          onDragEnd={(e) => onDragEnd(e)}
          onDrag={(e) => onDrag(e)}
          >
        <div className="h-6 flex bg-teal-400">
          <div className="w-10/12 h-6 cursor-grab" onMouseDown={() => select()}>
          </div>
          <div className="w-2/12 h-6 hover:bg-teal-600 text-center" 
              onClick={() => closeListick()}>
            <p className="cursor-default">X</p>
          </div>
        </div>
        <textarea className="w-40 h-36 p-1 bg-teal-200 focus:outline-none resize-none overflow-hidden" 
            value={props.text}
            onChange={e => changeText(e.target.value)}
            onMouseDown={() => select()}
        >
        </textarea>
    </div>
    );
  }
  
export default Listick;