import { getSplitRuleDetail } from "./detail";

test("get split rule detail should fail without token", async () => {
  await expect(
    getSplitRuleDetail("63c2807d669fa967f17f5559"),
  ).rejects.toThrow("token为空");
});
