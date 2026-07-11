import { getSubjectAreaPage } from "./page";
import { test } from "src/testUtils";
import assert from "node:assert/strict";

test("get subject area page", async () => {
  const result = await getSubjectAreaPage("HOMEPAGE");
  assert.strictEqual(Array.isArray(result.data), (true), "expected values to be strictly equal");
});
