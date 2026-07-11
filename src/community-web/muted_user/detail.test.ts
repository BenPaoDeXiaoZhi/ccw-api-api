import { getMutedUserDetail } from "./detail";
import { test } from "src/testUtils";
import assert from "node:assert/strict";

const STUDENT_NUMBER = "test-student-number";

test("get muted user detail should return null", async () => {
  const res = await getMutedUserDetail(STUDENT_NUMBER);
  assert.strictEqual(res, null, "expected value to be null");
});
