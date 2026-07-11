import { getRecommendCreations } from "./recommend";
import { test } from "src/testUtils";
import assert from "node:assert/strict";

test("get recommend creations should return data", async () => {
  const res = await getRecommendCreations(5);
  assert.strictEqual(Array.isArray(res.data), (true), "expected values to be strictly equal");
  res.data.forEach((c) => {
    assert.ok(((c.oid) !== undefined), "expected value to be defined");
    assert.ok(((c.title) !== undefined), "expected value to be defined");
  });
  assert.ok(((res.data.length) >= (0)), "expected greater/equal");
});
