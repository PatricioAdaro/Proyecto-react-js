
import './App.css';
import NavBar from './component/navBar';
import ItemListContainer from './component/itemLstContainer/ItemListContainer';
function App() {
  return (
    <div className="App">

      <NavBar/>
      <ItemListContainer greeting={'Bienvenidos a la tienda'}/>
      
    </div>
  );
}

export default App;
