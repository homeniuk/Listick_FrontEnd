import { useEffect }                from 'react';
import { useNavigate }              from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ButtonAdd    from './components/ButtonAdd';
import ButtonLogout from './components/ButtonLogout';
import Listick      from './components/Listick';
//import Downloading  from './Downloading';


import { getUser } from '../store/UserSlice';
import { getAllListicks, clearList } from '../store/ListickSlice';

export default function ListicksPage() {
  const navigate        = useNavigate();
  const dispatch        = useDispatch();
  const List            = useSelector((state)=>state.listicks.listOfListics);
  const isAuth          = useSelector((state)=>state.user.isAuth);
  const token           = useSelector((state)=>state.user.token);

  //const isUserDownloading   = useSelector((state)=>state.user.isDownloading);
  //const isListDownloading   = useSelector((state)=>state.listicks.isDownloading);

  useEffect(() => {
    if (isAuth){
      dispatch(getAllListicks(token));
    } else {
      dispatch(clearList());

      const accessToken = localStorage.getItem('accessToken');
      if (accessToken){
        dispatch(getUser({token: accessToken}));
      } else {
        navigate("/login");
      }
    }

  },[isAuth])
  
  return (
    <div>
        <ButtonAdd/>
        <ButtonLogout/>
        {List.map((i, index) => {
          return <Listick key={i.id} id={i.id} top={i.top} left={i.left} text={i.text}/>
        })}
      </div>
  );
}
