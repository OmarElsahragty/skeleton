import React from "react";
import { Grid } from "@material-ui/core";
import { Route, Switch, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { BodyNav } from "../../components/Molecules";
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
        <BodyNav className="mb-30" routes={AuthRoutes} />

        <Grid item xs={12}>
          <TransitionGroup>
            <Switch location={location}>
              {AuthRoutes.map((singleRoute) => (
                <Route key={singleRoute.path} path={singleRoute.path} exact>
                  {({ match }) => (
                    <CSSTransition
                      unmountOnExit
                      key={location.key}
                      timeout={10000}
                      in={match !== null}
                      classNames={singleRoute.animationClass}
                    >
                      <div className={singleRoute.animationClass}>
                        <singleRoute.component {...props} />
                      </div>
                    </CSSTransition>
                  )}
                </Route>
              ))}
            </Switch>
          </TransitionGroup>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AuthTemplate;
