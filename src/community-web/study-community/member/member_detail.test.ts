import { getStudyCommunityMemberDetail } from "./detail";
import { test, testAuthReadApi } from "src/testUtils";
import assert from "node:assert/strict";

test("get study community member detail should reject without login", async () => {
  await testAuthReadApi(() => getStudyCommunityMemberDetail(), {
    validateShape: (res) => {
      assert.strictEqual(typeof res, ("object"), "expected values to be strictly equal");
      assert.ok(((res) !== undefined), "expected value to be defined");
    },
  });
});
