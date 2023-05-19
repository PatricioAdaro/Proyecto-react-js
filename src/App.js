
import './App.css';
import NavBar from './component/navBar';
import ItemListContainer from './component/itemLstContainer/ItemListContainer';
import ItemCount from './component/ItemCount/ItemCount';


function App() {
  return (
    <div className="App">

      <NavBar/>
      <ItemListContainer greeting={'Bienvenidos a la tienda'}/>
      
      <ItemCount initial={1} stock={10} onAdd={(count)=> console.log('cantidad agregada', count)}/>
      
    </div>
  );
}

export default App;
