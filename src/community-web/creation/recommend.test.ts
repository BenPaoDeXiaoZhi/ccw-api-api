import { getRecommendCreations } from "./recommend";

test("get recommend creations should return data", async () => {
  const res = await getRecommendCreations(5);
  expect(Array.isArray(res)).toBe(true);
  res.forEach((c) => {
    expect(c.oid).toBeDefined();
    expect(c.title).toBeDefined();
  });
  expect(res).toHaveLength(5);
});
