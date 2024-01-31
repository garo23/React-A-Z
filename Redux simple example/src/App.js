// App.js
import React from "react";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import Counter from "./Counter";
import { counterReducer } from "./actions";

const rootReducer = combineReducers({
  counter: counterReducer
});

const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <div>
        <Counter />
      </div>
    </Provider>
  );
}

export default App;
