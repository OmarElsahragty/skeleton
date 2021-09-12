import util from "util";
import Redis from "./Connection.Cache";

class RedisClient {
  constructor() {
    Redis.get = util.promisify(Redis.get);
    Redis.set = util.promisify(Redis.set);
    Redis.del = util.promisify(Redis.del);
  }

  async get(key) {
    return Redis.get(key)
      .then((data) => {
        try {
          return JSON.parse(data);
        } catch {
          return data;
        }
      })
      .catch((err) => {
        throw err;
      });
  }

  async set(key, value) {
    return Redis.set(
      key,
      typeof value === "string" ? value : JSON.stringify(value)
    )
      .then(() => value)
      .catch((err) => {
        throw err;
      });
  }

  async delete(key) {
    const value = await this.get(key);
    if (!value) return;

    return Redis.del(key)
      .then(() => value)
      .catch((err) => {
        throw err;
      });
  }
}

export default new RedisClient();
