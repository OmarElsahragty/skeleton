import supertest from "supertest";
import { expect } from "chai";
import Dotenv from "dotenv";

Dotenv.config();
const request = supertest(`127.0.0.1:${process.env.PORT}`);

// ***************************************************************
// *                           Ping
// ***************************************************************

describe("GET /api/ping", () => {
  it('returns {"success": true} (JSON)', async () => {
    const response = await request.get("/api/ping");

    expect(response.status, "server down").to.eql(200);
  });
});
