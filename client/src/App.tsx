import React, { FC } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import Index from './routes';
import store from './store';

const App: FC = () => (
  <Provider store={store}>
    <Router>
      <Route path="/" component={Index} />
    </Router>
  </Provider>
);
export default App;
