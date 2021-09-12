import React, { useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import CoreAPI from "./CoreAPI";
import { AuthContext } from "../AuthProvider";
import { Spinner } from "../../../components/Atoms";

export const APICxt = React.createContext(null);

const APIWrapper = ({ children }) => {
  const [isAdjustingAccessHeader, setAdjustingAccessHeader] = useState(true);

  const { token } = useContext(AuthContext);

  useEffect(async () => {
    if (token) {
      await CoreAPI.addCommonHeader("x-access-token", token);
    } else {
      await CoreAPI.removeCommonHeader("x-access-token");
    }

    setAdjustingAccessHeader(false);
  }, [token]);

  return (
    <APICxt.Provider value={{ CoreAPI }}>
      {isAdjustingAccessHeader ? (
        <div className="defaultLoading">
          <Spinner loading={isAdjustingAccessHeader} />
        </div>
      ) : (
        children
      )}
    </APICxt.Provider>
  );
};

APIWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default APIWrapper;
