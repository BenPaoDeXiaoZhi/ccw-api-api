import { getCreationRecommendPositionList } from "./list";

test("get creation recommend position list returns array without token", async () => {
  const result = await getCreationRecommendPositionList(
    "63c2807d669fa967f17f5559",
  );
  expect(Array.isArray(result)).toBe(true);
});
