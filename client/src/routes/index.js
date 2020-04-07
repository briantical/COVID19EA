import React from "react";

import { Switch, Route } from "react-router-dom";
import { NoMatch, Home, Country, Region } from "../containers";

const Index = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/country" component={Country} />
      <Route path="/region" component={Region} />
      <Route component={NoMatch} />
    </Switch>
  );
};

export default Index;
