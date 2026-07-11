import { getPotentialCreations } from "./list";
import { test } from "src/testUtils";
import assert from "node:assert/strict";

test("get potential creations should return data", async () => {
  const res = await getPotentialCreations(10);
  assert.strictEqual(Array.isArray(res), (true), "expected values to be strictly equal");
  res.forEach((c) => {
    assert.ok(((c.oid) !== undefined), "expected value to be defined");
    assert.ok(((c.title) !== undefined), "expected value to be defined");
  });
  assert.strictEqual(((res) as any).length, (10), "expected length to be equal");
});
