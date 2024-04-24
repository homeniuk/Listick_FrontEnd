
import ButtonAdd from './components/ButtonAdd';
import Listick from './components/Listick';
import { useSelector } from 'react-redux';

function App() {
  //const L = {id:1, top:50, left: 250, text: "15646"};
  //const L2 = {id:2, top:100, left: 400, text: "25365"};
  const List = useSelector((state)=>state.Listick.listOfListics);
  //const Listup = useSelector((state)=>state.Listick.update);
  //List.push(L);
  //List.push(L2);


  return (
    <div>
      <ButtonAdd></ButtonAdd>
     {List.map((i, index) => {
        return <Listick key={i.id} top={i.top} left={i.left} text={i.text}/>
      })}

    </div>

  );
}
export default App;
//<ButtonAdd></ButtonAdd>
//<Listick id={L.id} top={L.top} left={L.left} text={L.text}></Listick>

/*{List.map((i, index) => {
  return <Listick id={i.id} top={i.top} left={i.left} text={i.text}></Listick>
      })}*/

     /* <div>
      {List.map((i, index) => {
          return <Listick id={i.id} top={i.top} left={i.left} text={i.text}/>
        })}
      </div>*/