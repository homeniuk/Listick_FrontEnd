
import ButtonAdd from './components/ButtonAdd';
import Listick from './components/Listick';
function App() {
  const L = {id:1, top:50, left: 150, text: "15646"};
  return (
    <div>
      <ButtonAdd></ButtonAdd>
      <Listick id={L.id} top={L.top} left={L.left} text={L.text}></Listick>
    </div>
  );
}

export default App;
