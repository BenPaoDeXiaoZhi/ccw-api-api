import { getStudentStats } from "./stats";
import { test } from "src/testUtils";
import assert from "node:assert/strict";

const STUDENT_OID = "63c2807d669fa967f17f5559";

test("get student stats", async () => {
  const stats = await getStudentStats(STUDENT_OID);
  assert.strictEqual(typeof stats.followerCount, ("number"), "expected values to be strictly equal");
  assert.strictEqual(typeof stats.followingCount, ("number"), "expected values to be strictly equal");
});
