import fetch from "node-fetch";
import Cache from "../../infrastructure/cache";

export default async (
  url,
  method = "get",
  headers = { "Content-Type": "application/json" },
  body = null
) => {
  let data = null;
  const useCache = method === "get";

  if (useCache) data = await Cache.get(url);

  if (!data) {
    data = await fetch(url, {
      method,
      headers,
      body: body && JSON.stringify(body),
    }).then((res) => res.json());

    if (useCache) data = await Cache.set(url, data);
  }

  return data;
};
