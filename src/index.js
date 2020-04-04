import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import "./styles/index.css";
import "./styles/theme.css";
import "bootstrap/dist/css/bootstrap.min.css";

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
