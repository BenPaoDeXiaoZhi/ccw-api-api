import { getStudentBlockRecordDetail } from "./detail";
import { test, testAuthReadApi } from "src/testUtils";
import assert from "node:assert/strict";

test("get student block record detail should fail without token", async () => {
  await testAuthReadApi(
    () => getStudentBlockRecordDetail("63c2807d669fa967f17f5559"),
    {
      rejectMessage: "token为空",
      validateShape: (res) => {
        assert.strictEqual(typeof res, ("object"), "expected values to be strictly equal");
        assert.ok(((res) !== undefined), "expected value to be defined");
      },
    },
  );
});
