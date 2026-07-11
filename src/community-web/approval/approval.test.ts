import { getApprovalTags } from "./list";
import { test } from "src/testUtils";
import assert from "node:assert/strict";

test("test approval list", async () => {
  const tags = await getApprovalTags("63c2807d669fa967f17f5559");
  assert.deepStrictEqual(tags.find((v) => v.approvalTagId == 235)!.approvalTagName, ("Gandi 开发者"), "expected values to be deeply equal");
});
