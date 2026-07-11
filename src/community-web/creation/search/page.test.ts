import { searchCreationsByTag } from "./page";
import { test } from "src/testUtils";
import assert from "node:assert/strict";

test("search creations by tag should return data", async () => {
  const res = await searchCreationsByTag({ tag: "史莱姆之森" });
  assert.strictEqual(Array.isArray(res.data), (true), "expected values to be strictly equal");
});
