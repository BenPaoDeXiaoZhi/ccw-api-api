import { getCreatorScore } from "./creator_score";

test("get creator score should reject without login", async () => {
  await expect(getCreatorScore()).rejects.toThrow();
});
