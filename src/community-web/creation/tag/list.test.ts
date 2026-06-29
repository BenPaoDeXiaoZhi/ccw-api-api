import { getCreationTags } from "./list";

test("get creation tags should return data", async () => {
  const res = await getCreationTags();
  expect(Array.isArray(res)).toBe(true);
  res.forEach((tag) => {
    expect(tag.id).toBeDefined();
    expect(tag.title).toBeDefined();
    expect(tag.code).toBeDefined();
  });
});
