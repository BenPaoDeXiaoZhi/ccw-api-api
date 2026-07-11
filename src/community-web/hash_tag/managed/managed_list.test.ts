import { getManagedHashTags } from "./list";
import { test } from "src/testUtils";
import assert from "node:assert/strict";

const STUDENT_OID = "63c2807d669fa967f17f5559";

test("get managed hash tags should return data", async () => {
  const res = await getManagedHashTags(STUDENT_OID);
  assert.strictEqual(typeof res.totalPages, ("number"), "expected values to be strictly equal");
  assert.strictEqual(typeof res.totalNum, ("number"), "expected values to be strictly equal");
  assert.strictEqual(Array.isArray(res.data), (true), "expected values to be strictly equal");
  assert.ok(((res.page) >= (1)), "expected greater/equal");
  assert.ok(((res.perPage) >= (1)), "expected greater/equal");
});
