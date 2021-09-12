import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../../ContextWrappers/AuthProvider";

const PublicRoute = ({ component, exact, path, redirectionPath }) => {
  const { userData, token } = useContext(AuthContext);

  return (
    <>
      {!userData || !token ? (
        <Route path={path} exact={exact} component={component} />
      ) : (
        <Redirect to={redirectionPath} />
      )}
    </>
  );
};

PublicRoute.propTypes = {
  exact: PropTypes.bool,
  component: PropTypes.func.isRequired,
  path: PropTypes.string.isRequired,
  redirectionPath: PropTypes.string.isRequired,
};

export default PublicRoute;
