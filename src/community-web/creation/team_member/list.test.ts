import { getTeamMemberList } from "./list";
import { test, testAuthReadApi } from "src/testUtils";
import assert from "node:assert/strict";

test("get team member list should fail without token", async () => {
  await testAuthReadApi(
    () => getTeamMemberList("63c2807d669fa967f17f5559", ["MEMBER"]),
    {
      rejectMessage: "token为空",
      validateShape: (res) => {
        assert.strictEqual(Array.isArray(res), (true), "expected values to be strictly equal");
      },
    },
  );
});
