import "./App.css";
import { Provider } from "react-redux";
import { createStore } from "redux";
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";

import cartItems from "./assets/data";

import reducer from "./reducer";

const initialStore = {
  cart: cartItems,
  total: 105,
  amount: 6,
};

const store = createStore(reducer, initialStore);

function App() {
  return (
    <Provider store={store}>
      <main>
        <Navbar />
        <CartContainer />
      </main>
    </Provider>
  );
}

export default App;
