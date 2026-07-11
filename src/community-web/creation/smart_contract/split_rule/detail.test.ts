import { getSplitRuleDetail } from "./detail";
import { test, testAuthReadApi } from "src/testUtils";
import assert from "node:assert/strict";

test("get split rule detail should fail without token", async () => {
  await testAuthReadApi(
    () => getSplitRuleDetail("63c2807d669fa967f17f5559"),
    {
      rejectMessage: "token为空",
      validateShape: (res) => {
        assert.strictEqual(typeof res, ("object"), "expected values to be strictly equal");
      },
    },
  );
});
