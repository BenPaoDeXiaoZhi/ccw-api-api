import { getStudentLastActiveAt } from "./last_active_at";
import { test } from "src/testUtils";
import assert from "node:assert/strict";

const STUDENT_OID = "63c2807d669fa967f17f5559";

test("get student last active at", async () => {
  const result = await getStudentLastActiveAt(STUDENT_OID);
  assert.strictEqual(typeof result.lastActiveAt, ("number"), "expected values to be strictly equal");
});
