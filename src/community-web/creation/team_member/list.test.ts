import { getTeamMemberList } from "./list";
import { testAuthReadApi } from "src/testUtils";

test("get team member list should fail without token", async () => {
  await testAuthReadApi(
    () => getTeamMemberList("63c2807d669fa967f17f5559", ["MEMBER"]),
    {
      rejectMessage: "token为空",
      validateShape: (res) => {
        expect(Array.isArray(res)).toBe(true);
      },
    },
  );
});
