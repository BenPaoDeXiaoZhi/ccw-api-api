import { getCreationFavoriteDetail } from "./detail";
import { test, testAuthReadApi } from "src/testUtils";
import assert from "node:assert/strict";

const CREATION_OID = "62bd863874c3155ff7a54308";

test("get creation favorite detail should reject without login", async () => {
  await testAuthReadApi(() => getCreationFavoriteDetail(CREATION_OID), {
    rejectMessage: "token为空(4001082401)",
    validateShape: (res) => {
      assert.strictEqual(
        typeof res,
        "object",
        "expected values to be strictly equal",
      );
      assert.ok(res !== undefined, "expected value to be defined");
    },
  });
});
