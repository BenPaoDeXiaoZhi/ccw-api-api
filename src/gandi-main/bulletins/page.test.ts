import { getBulletinsPage } from "./page";

test("get bulletins page should return data", async () => {
  const res = await getBulletinsPage();
  expect(res.data).toBeDefined();
  expect(Array.isArray(res.data)).toBe(true);
});
