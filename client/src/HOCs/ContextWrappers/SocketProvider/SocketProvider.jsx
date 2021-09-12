import React, { useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import CoreSocket from "./CoreSocket";
import { AuthContext } from "../AuthProvider";

export const SOCKETCxt = React.createContext(null);

const SocketWrapper = ({ children }) => {
  const [socketId, setSocketId] = useState("");

  const { userData } = useContext(AuthContext);

  useEffect(() => {
    CoreSocket.on("connect", () => setSocketId(CoreSocket.socket.id));
  }, []);

  useEffect(() => {
    if (userData) CoreSocket.emit("join", userData.id);
  }, [userData]);

  return (
    <SOCKETCxt.Provider value={{ CoreSocket, socketId }}>
      {children}
    </SOCKETCxt.Provider>
  );
};

SocketWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SocketWrapper;
