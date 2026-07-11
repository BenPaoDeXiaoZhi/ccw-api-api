import { getCreationTags } from "./list";
import { test } from "src/testUtils";
import assert from "node:assert/strict";

test("get creation tags should return data", async () => {
  const res = await getCreationTags();
  assert.strictEqual(Array.isArray(res), (true), "expected values to be strictly equal");
  res.forEach((tag) => {
    assert.ok(((tag.id) !== undefined), "expected value to be defined");
    assert.ok(((tag.title) !== undefined), "expected value to be defined");
    assert.ok(((tag.code) !== undefined), "expected value to be defined");
  });
});
