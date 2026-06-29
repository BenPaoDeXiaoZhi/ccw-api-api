import { getSubjectAreaPageByChannel } from "./page_by_channel";

test("get subject area page by channel", async () => {
  const result = await getSubjectAreaPageByChannel("mmo");
  expect(Array.isArray(result.data)).toBe(true);
});
