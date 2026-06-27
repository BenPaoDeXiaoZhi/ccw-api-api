import { getEmojiPage } from "./page";

test("get emoji page should return data", async () => {
  const res = await getEmojiPage("PUBLISHED", { perPage: 5 });
  expect(res.data).toBeDefined();
  expect(Array.isArray(res.data)).toBe(true);
  expect(res.totalNum).toBeDefined();
  expect(res.totalPages).toBeDefined();
  if (res.data.length > 0) {
    expect(res.data[0].id).toBeDefined();
    expect(res.data[0].name).toBeDefined();
  }
});
