import loadable from "@loadable/component";
import React, { FC } from "react";
import { Route, Switch } from "react-router-dom";

const Home = loadable(() => import("@pages/Home"));
const Result = loadable(() => import("@pages/Result"));

const App: FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/result/:uniqueId" component={Result} />
    </Switch>
  );
};

export default App;
