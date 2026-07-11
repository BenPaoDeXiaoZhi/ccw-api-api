import { getTime } from "../base/dateTime";
import { test } from "src/testUtils";
import assert from "node:assert/strict";

test("get time should return a number", async () => {
  const time = await getTime();
  assert.strictEqual(typeof time, ("number"), "expected values to be strictly equal");
  assert.ok(((time) > (0)), "expected greater than");
});
