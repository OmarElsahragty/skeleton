import io from "socket.io";

class Socket {
  constructor() {
    this.socket = null;
  }

  async setup(server) {
    this.socket = io(server, {
      cors: true,
    });

    this.socket.on("connection", (socket) => {
      socket.on("join", (roomID) => socket.join(roomID));
    });
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

export default new Socket();
