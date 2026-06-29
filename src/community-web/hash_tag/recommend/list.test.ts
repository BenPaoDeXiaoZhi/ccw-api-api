import { getRecommendHashTags } from "./list";

test("get recommend hash tags should fail without token", async () => {
  await expect(getRecommendHashTags()).resolves.toHaveLength(1);
});
