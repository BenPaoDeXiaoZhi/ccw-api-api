import { saveProjectCloudVariable, saveUserCloudVariable } from "./save";
import { test } from "src/testUtils";
import assert from "node:assert/strict";

test("save project cloud variable should return saved value", async () => {
  const testValue = "2025-07-05T17:40:53.057+0800";
  const res = await saveProjectCloudVariable(
    "68dddc63d28b025cb53fae25",
    "test",
    testValue,
  );
  assert.ok(((res) !== undefined), "expected value to be defined");
  assert.strictEqual(res.v, (testValue), "expected values to be strictly equal");
});

test("save user cloud variable should ok", async () => {
  const res = await saveUserCloudVariable("68dddc63d28b025cb53fae25", 0, {
    key2: "0",
  });
  assert.deepStrictEqual(res.key2, ("0"), "expected values to be deeply equal");
});
