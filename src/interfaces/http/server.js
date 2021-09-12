import cors from "cors";
import http from "http";
import express from "express";
import Socket from "./socket";
import { I18next, ErrorHandler } from "./middlewares";
import routes from "./routes";

class Server {
  constructor(port) {
    this.port = port;
    this.app = express();
    this.server = http.createServer(this.app);
    Socket.setup(this.server);
    this.setup();
  }

  setup() {
    this.app
      .use(cors())
      .use(I18next)
      .use(express.json())
      .disable("x-powered-by");

    this.app.get("/api/ping", (_, res) => {
      res.status(200).json({
        success: true,
      });
    });

    this.app.use("/api", routes);

    this.app.use(ErrorHandler);
  }

  start() {
    this.server.listen(this.port, () => {
      // eslint-disable-next-line no-console
      console.log(`Server has started on port: ${this.port}`.success);
    });
  }
}

export default Server;
