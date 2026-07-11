import { getCreationActivityStatsList } from "./list";
import { test } from "src/testUtils";
import assert from "node:assert/strict";

test("get creation activity stats list returns array without token", async () => {
  const result = await getCreationActivityStatsList(
    "63c2807d669fa967f17f5559",
  );
  assert.strictEqual(Array.isArray(result), (true), "expected values to be strictly equal");
});
