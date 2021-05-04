import "./App.css";
import { Provider } from "react-redux";

import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";

import store from "./redux/store";

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
