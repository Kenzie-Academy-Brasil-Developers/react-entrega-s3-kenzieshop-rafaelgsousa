import './App.css';
import ProductsList from './Components/ProductsList';
import Cart from './Components/Carrinho';
import Menu from './Components/Menu';
import {useState} from "react"

function App() {

  const [show,setShow] = useState(false)

  return (
    <div className="App">
      <Menu setShow={setShow}/>
      {show?
      <Cart/>
      :
      <ProductsList/>
      }  
    </div>
  );
}

export default App;
