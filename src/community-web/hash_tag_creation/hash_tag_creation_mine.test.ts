import { getMyHashTagCreations } from "./mine";
import { test, testAuthReadApi, expectKeys } from "src/testUtils";
import assert from "node:assert/strict";

test("get my hash tag creations should reject without login", async () => {
  await testAuthReadApi(() => getMyHashTagCreations(), {
    rejectMessage: "token为空",
    validateShape: (res) => {
      expectKeys(res, ["data", "offset", "page", "perPage", "totalNum", "totalPages"]);
      assert.strictEqual(Array.isArray(res.data), (true), "expected values to be strictly equal");
    },
  });
});
