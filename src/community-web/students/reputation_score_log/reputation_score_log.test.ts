import { getReputationScoreLog } from "./page";

test("get reputation score log page should reject without login", async () => {
  await expect(getReputationScoreLog()).rejects.toThrow();
});
