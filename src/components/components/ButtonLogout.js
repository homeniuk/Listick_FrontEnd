import { useDispatch } from 'react-redux';
import { logoutUser } from '../../store/UserSlice';
import { useNavigate }              from 'react-router-dom';

function ButtonLogout() {
  const dispatch = useDispatch();
  const navigate        = useNavigate();

  function handleClick(e) {
    dispatch(logoutUser());
    //navigate("/login");
  }

    return (
      <button className="right-0 absolute my-2 bg-blue-300 rounded-lg px-4 py-2 mr-4 mt-4
      hover:bg-blue-600 active:bg-blue-900" 
      onClick={() => handleClick()}> 
        Logout
     </button>
  );
  }
  
  export default ButtonLogout;