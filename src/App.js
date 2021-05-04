import "./App.css";
import { Provider } from "react-redux";
import { createStore } from "redux";
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";

import reducer from "./reducer";

const store = createStore(reducer);

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
