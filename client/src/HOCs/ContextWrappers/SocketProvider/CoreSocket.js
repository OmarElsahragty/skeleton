import socketIOClient from "socket.io-client";
import { SOCKET_URL } from "../../../constants";

class _CoreSocket {
  constructor() {
    this.socket = socketIOClient(SOCKET_URL);

    // this.socket.on("connect_error", (err) => {
    //   console.error(`SOCKET CONNECTION ERROR: ${err.message}`);
    // });
  }

  emit(event, data, clientId) {
    if (clientId) {
      return this.socket.sockets.to(clientId).emit(event, data);
    } else {
      return this.socket.emit(event, data);
    }
  }

  on(event, callBack) {
    return this.socket.on(event, callBack);
  }

  off(event) {
    this.socket.off(event);
  }
}

export default new _CoreSocket();
