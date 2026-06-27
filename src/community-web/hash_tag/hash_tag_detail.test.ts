import { getHashTagDetail } from "./detail";

test("get hash tag detail should return data", async () => {
  const res = await getHashTagDetail("蔚蓝档案");
  expect(res.identifier).toBe("蔚蓝档案");
  expect(res.id).toBe(29887);
  expect(res.status).toBe("ENABLED");
  expect(Array.isArray(res.managers)).toBe(true);
  expect(Array.isArray(res.managerIds)).toBe(true);
});
