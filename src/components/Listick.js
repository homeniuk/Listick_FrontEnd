import { deleteListick, changeListick, selectListick, setListickPossition } from '../redux/actions/ListicksAC';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

function Listick(props) {

  const dispatch = useDispatch();

  const [diff, setdiff] = useState({dTop:0, dLeft:0});

  const divStyle = {
    top: ''+ props.top + 'px',
    left: ''+ props.left + 'px',
  };

  function closeListick(_id) {
    dispatch(deleteListick(_id));
  }
  function changeText(_id, text) {
    dispatch(changeListick(_id, text));
  }
  function select(_id) {
    dispatch(selectListick(_id));
  }
  function onDragStart(_id, e) {
    let x = e.clientX;
    let y = e.clientY;
    let dTop = props.top - y;
    let dLeft = props.left - x;
    setdiff({dTop:dTop, dLeft:dLeft})
  }
  function onDrag(_id, e) {
    //let x = e.clientX;
    //let y = e.clientY;
    //if (x===0 && y===0)
    //  return;
    //dispatch(setListickPossition(_id, y + diff.dTop, x + diff.dLeft));    //To slowly
  }
  function onDragEnd(_id, e) {
    let x = e.clientX;
    let y = e.clientY;
    dispatch(setListickPossition(_id, y + diff.dTop, x + diff.dLeft));
  }

    return (
    <div style={divStyle} className="w-40 h-40 absolute" draggable = {true} 
          onDragStart={(e) => onDragStart(props.id, e)}
          onDragEnd={(e) => onDragEnd(props.id, e)}
          onDrag={(e) => onDrag(props.id, e)}
          >
        <div className="h-6 flex bg-teal-400">
          <div className="w-10/12 h-6 cursor-grab" onMouseDown={() => select(props.id)}>
          </div>
          <div className="w-2/12 h-6 hover:bg-teal-600 text-center" 
              onClick={() => closeListick(props.id)}>
            <p className="cursor-default">X</p>
          </div>
        </div>
        <textarea className="w-40 h-36 p-1 bg-teal-200 focus:outline-none resize-none overflow-hidden" 
            value={props.text}
            onChange={e => changeText(props.id, e.target.value)}
            onMouseDown={() => select(props.id)}
        >
        </textarea>
    </div>
    );
  }
  
export default Listick;