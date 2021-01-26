import React from "react";
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import cartItems from "./cart-items";
import reducer from './reducer.js';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const initialStore = {
  cart: cartItems,
  total: 105,
  amount: 5
};

const store = createStore(reducer, initialStore);

function App() {
  // cart setup
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
