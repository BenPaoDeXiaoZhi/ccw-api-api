import { getStudentBlockStatus } from "./status";
import { test, testAuthReadApi } from "src/testUtils";
import assert from "node:assert/strict";

const STUDENT_OID = "63c2807d669fa967f17f5559";

test("get student block status should reject without login", async () => {
  await testAuthReadApi(() => getStudentBlockStatus(STUDENT_OID), {
    rejectMessage: "token为空",
    validateShape: (res) => {
      assert.strictEqual(typeof res, ("object"), "expected values to be strictly equal");
      assert.ok(((res) !== undefined), "expected value to be defined");
    },
  });
});
