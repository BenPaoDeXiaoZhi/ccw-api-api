import { getRecommendCreators } from "./list";

test("get recommend creators should return data", async () => {
  const res = await getRecommendCreators(1, 1);
  expect(Array.isArray(res)).toBeTruthy();
  if (res.length > 0) {
    expect(res[0].creatorType).toMatch(/^(EXCELLENT|POTENTIAL)$/);
    expect(res[0].studentOid).toBeDefined();
    expect(res[0].name).toBeDefined();
  }
});