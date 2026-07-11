import { getSearchHotWords } from "./hot_words";
import { test } from "src/testUtils";
import assert from "node:assert/strict";

test("get search hot words", async () => {
  const hotWords = await getSearchHotWords(10);
  assert.strictEqual(Array.isArray(hotWords), (true), "expected values to be strictly equal");
  assert.strictEqual(((hotWords) as any).length, (10), "expected length to be equal");
});
