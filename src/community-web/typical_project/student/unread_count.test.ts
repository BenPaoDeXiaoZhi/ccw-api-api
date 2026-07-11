import { getTypicalProjectUnreadCount } from "./unread_count";
import { test, testAuthReadApi } from "src/testUtils";
import assert from "node:assert/strict";

test("get typical project unread count should fail without token", async () => {
  await testAuthReadApi(
    () => getTypicalProjectUnreadCount("63c2807d669fa967f17f5559"),
    {
      rejectMessage: "token为空",
      validateShape: (res) => {
        assert.strictEqual(typeof res, ("number"), "expected values to be strictly equal");
      },
    },
  );
});
