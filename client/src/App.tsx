import React, { FC } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import Index from './routes';

const App: FC = () => (
  <Router>
    <Route path="/" component={Index} />
  </Router>
);
export default App;
