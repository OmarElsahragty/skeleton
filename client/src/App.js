import React from "react";
import { Switch, Redirect, useLocation } from "react-router-dom";
import { PrivateRoute, PublicRoute } from "./HOCs/CustomRoutes";

import { AuthPage, HomePage } from "./pages";

import "./App.scss";

const App = () => {
  const { pathname } = useLocation();

  return (
    <div className="App">
      <Switch>
        <Redirect from="/:url*(/+)" to={pathname.slice(0, -1)} />
        <PublicRoute path="/auth" redirectionPath="/" component={AuthPage} />
        <PrivateRoute
          exact
          path="/"
          redirectionPath="/auth"
          component={HomePage}
        />
      </Switch>
    </div>
  );
};

export default App;
