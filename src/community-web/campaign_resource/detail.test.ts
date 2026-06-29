import { getCampaignResources } from "./detail";

test("get campaign resources with tags keyword", async () => {
  const res = await getCampaignResources("tags");
  expect(res.keyword).toBe("tags");
  expect(res.resourceType).toBe("SUBJECT_AREA");
});

test("get campaign resources with mmo keyword", async () => {
  const res = await getCampaignResources("mmo");
  expect(res.keyword).toBe("mmo");
});
