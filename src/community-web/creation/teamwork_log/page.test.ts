import { getTeamworkLogPage } from "./page";

test("get teamwork log page should fail without token", async () => {
  await expect(
    getTeamworkLogPage("63c2807d669fa967f17f5559", ["BLOCK"]),
  ).rejects.toThrow("token为空");
});
