import React from "react";
import propTypes from "prop-types";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";

import Index from "./routes";

const App = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Route path="/:filter?" component={Index} />
    </Router>
  </Provider>
);

App.propTypes = {
  store: propTypes.object.isRequired
};
export default App;
