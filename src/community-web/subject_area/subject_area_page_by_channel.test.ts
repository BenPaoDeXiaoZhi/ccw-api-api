import { getSubjectAreaPageByChannel } from "./page_by_channel";
import { test } from "src/testUtils";
import assert from "node:assert/strict";

test("get subject area page by channel", async () => {
  const result = await getSubjectAreaPageByChannel("mmo");
  assert.strictEqual(Array.isArray(result.data), (true), "expected values to be strictly equal");
});
