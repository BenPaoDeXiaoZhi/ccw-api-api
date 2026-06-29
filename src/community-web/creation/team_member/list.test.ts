import { getTeamMemberList } from "./list";

test("get team member list should fail without token", async () => {
  await expect(
    getTeamMemberList("63c2807d669fa967f17f5559", ["MEMBER"]),
  ).rejects.toThrow("token为空");
});
