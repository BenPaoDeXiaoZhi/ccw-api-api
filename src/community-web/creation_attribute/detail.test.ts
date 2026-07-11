import { getCreationAttributeDetail } from "./detail";
import { test, hasKeyPath } from "src/testUtils";
import assert from "node:assert/strict";

test("get creation attribute detail returns null or object without token", async () => {
  const result = await getCreationAttributeDetail(
    "63c2807d669fa967f17f5559",
  );
  assert.strictEqual(result === null || typeof result === "object", (true), "expected values to be strictly equal");
  if (result !== null) {
    assert.ok(hasKeyPath(result, "ext"), "expected property to exist");
    assert.ok(hasKeyPath(result.ext, "KEYPAD_CONFIG"), "expected property to exist");
    assert.strictEqual(Array.isArray(result.ext.KEYPAD_CONFIG), (true), "expected values to be strictly equal");
  }
});
