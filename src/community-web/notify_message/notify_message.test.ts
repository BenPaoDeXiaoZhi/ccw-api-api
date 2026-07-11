import { getNotifyDeleteReasons } from "./show";
import { test } from "src/testUtils";
import assert from "node:assert/strict";

test("get notify delete reasons", async () => {
  const result = await getNotifyDeleteReasons();
  assert.strictEqual(Array.isArray(result), (true), "expected values to be strictly equal");
});
