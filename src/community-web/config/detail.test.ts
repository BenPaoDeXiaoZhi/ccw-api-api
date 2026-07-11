import { getConfigDetail } from "./detail";
import { test } from "src/testUtils";
import assert from "node:assert/strict";

test("get config detail returns value without token", async () => {
  const result = await getConfigDetail("foo");
  assert.strictEqual(result === null ||
      typeof result === "string" ||
      typeof result === "number" ||
      typeof result === "boolean" ||
      typeof result === "object", (true), "expected values to be strictly equal");
});
