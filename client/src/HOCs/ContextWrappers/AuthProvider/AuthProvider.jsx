import React, { useState } from "react";
import PropTypes from "prop-types";

export const AuthContext = React.createContext(null);

const AuthProvider = ({ children }) => {
  const [recollect, setRecollect] = useState(true);

  const [token, setAuthToken_] = useState(localStorage.getItem("token"));
  const [userData, setUserData_] = useState(
    JSON.parse(localStorage.getItem("user"))
  );

  const setAuthentication = async (data) => {
    if (recollect && data?.token && data?.userData) {
      localStorage.setItem("user", JSON.stringify(data.userData));
      localStorage.setItem("token", data.token);
    } else {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
    }

    setAuthToken_(data?.token);
    setUserData_(data?.userData);
  };

  return (
    <AuthContext.Provider
      value={{ recollect, setRecollect, token, userData, setAuthentication }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;
