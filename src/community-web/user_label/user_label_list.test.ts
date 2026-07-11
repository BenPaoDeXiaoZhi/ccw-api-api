import { getUserLabelList } from "./list";
import { test } from "src/testUtils";
import assert from "node:assert/strict";

test("get user label list", async () => {
  const result = await getUserLabelList();
  assert.strictEqual(Array.isArray(result.userLabels), (true), "expected values to be strictly equal");
});
