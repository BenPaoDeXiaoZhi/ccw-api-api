import { getCurrentTimestamp } from "./current";
import { test } from "src/testUtils";
import assert from "node:assert/strict";

test("get current timestamp should return a number", async () => {
  const ts = await getCurrentTimestamp();
  assert.strictEqual(typeof ts, ("number"), "expected values to be strictly equal");
  assert.ok(((ts) > (0)), "expected greater than");
});
