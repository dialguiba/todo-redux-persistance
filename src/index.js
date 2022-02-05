import React from "react";
import ReactDOM from "react-dom";
import { TodoApp } from "./TodoApp";

import { store, persistor } from "./store/store";
import { Provider } from "react-redux";
/*  */
import { PersistGate } from "redux-persist/integration/react";
import { HashRouter, Route, Routes } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <HashRouter>
          <TodoApp />
        </HashRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
