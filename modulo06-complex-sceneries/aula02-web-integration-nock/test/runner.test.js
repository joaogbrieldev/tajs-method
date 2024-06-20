import { describe, expect, it } from "@jest/globals";
import nock from "nock";
import { feathAPIByPage } from "../src/runner";
import page01Fixure from "./fixures/get-page01.json";

describe("Web Integration Test Suite", () => {
  it("should return the right object with right properties", async () => {
    const scope = nock(`https://rickandmortyapi.com/api`)
      .get("/character/")
      .query({ page: 1 })
      .reply(200, page01Fixure);
    const page01 = await feathAPIByPage();
    expect(page01).toEqual([
      {
        id: 1,
        name: "Rick Sanchez",
      },
    ]);
    scope.done();
  });
});
