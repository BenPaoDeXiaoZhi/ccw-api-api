import { getPotentialCreations } from "./list";

test("get potential creations should return data", async () => {
  const res = await getPotentialCreations(10);
  expect(Array.isArray(res)).toBe(true);
  res.forEach((c) => {
    expect(c.oid).toBeDefined();
    expect(c.title).toBeDefined();
  });
  expect(res).toHaveLength(10);
});
