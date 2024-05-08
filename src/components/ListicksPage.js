import ButtonAdd from './components/ButtonAdd';
import Listick from './components/Listick';
import { useSelector } from 'react-redux';

function ListicksPage() {

  const List = useSelector((state)=>state.listicks.listOfListics);

  return (
    <div>
        <ButtonAdd></ButtonAdd>
        {List.map((i, index) => {
          return <Listick key={i.id} id={i.id} top={i.top} left={i.left} text={i.text}/>
        })}
      </div>
  );
}

export default ListicksPage;