
import ButtonAdd from './components/ButtonAdd';
import Listick from './components/Listick';
import { useSelector, useDispatch } from 'react-redux';
//import { useEffect } from 'react';
import { setList } from './redux/actions/ListicksAC';

function App() {
  const dispatch = useDispatch();
  const List = useSelector((state)=>state.Listick.listOfListics);

  /*useEffect(() => {
    const list = JSON.parse(localStorage.getItem('list'));
    if (list) {
     dispatch(setList(list));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(List));
  }, [List]);*/



  return (
    <div>
      <ButtonAdd></ButtonAdd>
      {List.map((i, index) => {
        return <Listick key={i.id} id={i.id} top={i.top} left={i.left} text={i.text}/>
      })}

    </div>

  );
}
export default App;
