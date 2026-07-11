import { getStudentProfile } from "./profile";
import { test } from "src/testUtils";
import assert from "node:assert/strict";

const STUDENT_OID = "63c2807d669fa967f17f5559";

test("get student profile", async () => {
  const profile = await getStudentProfile(STUDENT_OID);
  assert.strictEqual(profile.studentOid, (STUDENT_OID), "expected values to be strictly equal");
});
