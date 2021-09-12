import React from "react";
import { Grid } from "@material-ui/core";
import { Route, Redirect, Switch, useLocation } from "react-router-dom";
import { AuthRoutes } from "../../routes";

import styles from "./Auth.module.css";

const AuthTemplate = (props) => {
  const location = useLocation();

  return (
    <Grid
      container
      className="h-100vh"
      alignItems="center"
      justifyContent="center"
    >
      <Grid item className={`${styles.authBox} py-28"`}>
        {location.pathname === "/auth" && <Redirect from="" to="/auth/login" />}
        <Switch>
          {AuthRoutes.map((singleRoute) => (
            <Route
              key={singleRoute.path}
              path={singleRoute.path}
              exact={singleRoute.exact}
              render={(RenderProps) => (
                <singleRoute.component {...props} {...RenderProps} />
              )}
            />
          ))}
        </Switch>
      </Grid>
    </Grid>
  );
};

export default AuthTemplate;
