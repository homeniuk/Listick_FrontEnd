import { useDispatch } from 'react-redux';
import {addNewListick} from '../store/ListickSlice';

function ButtonAdd() {
  const dispatch = useDispatch();

  function handleClick(e) {
    dispatch(addNewListick());
  }

    return (
      <button className="my-2 bg-blue-300 rounded-lg px-4 py-2 ml-4 mt-4
      hover:bg-blue-600 active:bg-blue-900" 
      onClick={() => handleClick()}> 
       Add new
     </button>
  );
  }
  
  export default ButtonAdd;