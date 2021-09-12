import { createClient } from "redis";
import Config from "../../../config";

export default createClient({
  host: Config.Cache.Host,
  port: Config.Cache.Port,
});
