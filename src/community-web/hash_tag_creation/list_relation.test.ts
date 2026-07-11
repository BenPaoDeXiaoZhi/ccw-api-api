import { getPlanetsOfCreation } from "./list_relation";
import { test, testAuthReadApi } from "src/testUtils";
import assert from "node:assert/strict";

const CREATION_OID = "62bd863874c3155ff7a54308";

test("get hash tag creation relation list should reject without login", async () => {
  await testAuthReadApi(() => getPlanetsOfCreation(CREATION_OID), {
    validateShape: (res) => {
      assert.strictEqual(Array.isArray(res), (true), "expected values to be strictly equal");
    },
  });
});
