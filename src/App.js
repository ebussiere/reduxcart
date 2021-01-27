import React from "react";
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";

import reducer from './reducer.js';
import { createStore } from 'redux';
import { Provider } from 'react-redux';



const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

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
