import { getEmojiCategoryList } from "./list";
import { test } from "src/testUtils";
import assert from "node:assert/strict";

test("get emoji category list should return data", async () => {
  const res = await getEmojiCategoryList();
  assert.strictEqual(Array.isArray(res), (true), "expected values to be strictly equal");
  if (res.length > 0) {
    assert.ok(((res[0].id) !== undefined), "expected value to be defined");
    assert.ok(((res[0].name) !== undefined), "expected value to be defined");
  }
});
