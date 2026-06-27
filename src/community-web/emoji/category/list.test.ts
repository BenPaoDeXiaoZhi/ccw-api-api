import { getEmojiCategoryList } from "./list";

test("get emoji category list should return data", async () => {
  const res = await getEmojiCategoryList();
  expect(Array.isArray(res)).toBe(true);
  if (res.length > 0) {
    expect(res[0].id).toBeDefined();
    expect(res[0].name).toBeDefined();
  }
});
