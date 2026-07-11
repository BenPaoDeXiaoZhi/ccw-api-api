import { searchCloudAssets } from "./search";
import { test, testAuthReadApi, expectKeys } from "src/testUtils";
import assert from "node:assert/strict";

test("search cloud assets should fail without token", async () => {
  const userId = "63c2807d669fa967f17f5559";
  const path = "/23azZqHBnqj/";
  await testAuthReadApi(() => searchCloudAssets(userId, path), {
    rejectMessage: "ccw axios Request failed: token为空(4001082401)",
    validateShape: (res) => {
      expectKeys(res, [
        "data",
        "offset",
        "page",
        "perPage",
        "totalNum",
        "totalPages",
      ]);
      assert.strictEqual(Array.isArray(res.data), (true), "expected values to be strictly equal");
    },
  });
});
