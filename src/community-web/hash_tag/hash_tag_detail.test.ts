import { getHashTagDetail } from "./detail";
import { test } from "src/testUtils";
import assert from "node:assert/strict";

test("get hash tag detail should return data", async () => {
  const res = await getHashTagDetail("蔚蓝档案");
  assert.strictEqual(res.identifier, ("蔚蓝档案"), "expected values to be strictly equal");
  assert.strictEqual(res.id, (29887), "expected values to be strictly equal");
  assert.strictEqual(res.status, ("ENABLED"), "expected values to be strictly equal");
  assert.strictEqual(Array.isArray(res.managers), (true), "expected values to be strictly equal");
  assert.strictEqual(Array.isArray(res.managerIds), (true), "expected values to be strictly equal");
});
