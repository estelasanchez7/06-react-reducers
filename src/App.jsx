import Contador from "./components/Contador";
import ContadorMejorado from "./components/ContadorMejorado";
import ShopingCart from "./components/ShoppingCart";

function App() {
  return (
    <div className="App">
      <h1>useReducer</h1>
      <hr />
      <ShopingCart/>
      <hr />
      <ContadorMejorado/>
      <hr />
      <Contador/>
    </div>
  );
}

export default App;
