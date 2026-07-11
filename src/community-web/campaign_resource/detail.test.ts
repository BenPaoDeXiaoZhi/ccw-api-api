import { getCampaignResources } from "./detail";
import { test } from "src/testUtils";
import assert from "node:assert/strict";

test("get campaign resources with tags keyword", async () => {
  const res = await getCampaignResources("tags");
  assert.strictEqual(res.keyword, ("tags"), "expected values to be strictly equal");
  assert.strictEqual(res.resourceType, ("SUBJECT_AREA"), "expected values to be strictly equal");
});

test("get campaign resources with mmo keyword", async () => {
  const res = await getCampaignResources("mmo");
  assert.strictEqual(res.keyword, ("mmo"), "expected values to be strictly equal");
});
