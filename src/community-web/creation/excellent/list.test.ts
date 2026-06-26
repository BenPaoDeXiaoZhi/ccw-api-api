import { getExcellentCreations } from "./list";

test("get excellent creations should return data", async () => {
  const res = await getExcellentCreations(15);
  expect(Array.isArray(res)).toBe(true);
  res.forEach((c) => {
    expect(c.oid).toBeDefined();
    expect(c.title).toBeDefined();
  });
  expect(res).toHaveLength(15);
});
