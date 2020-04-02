import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./styles/index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import store from "./store";

ReactDOM.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>,
  document.getElementById("root")
);
serviceWorker.unregister();
