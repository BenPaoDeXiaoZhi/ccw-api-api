import { getMyTasks } from "./mine";
import { test, testAuthReadApi } from "src/testUtils";
import assert from "node:assert/strict";

test("get my tasks", async () => {
  await testAuthReadApi(() => getMyTasks(), {
    rejectMessage: "token为空",
    validateShape: (res) => {
      assert.strictEqual(Array.isArray(res), (true), "expected values to be strictly equal");
    },
  });
});
