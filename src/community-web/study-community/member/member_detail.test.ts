import { testAuthReadApi } from "src/testUtils";
import { getStudyCommunityMemberDetail } from "./detail";

test("get study community member detail should reject without login", async () => {
  await testAuthReadApi(() => getStudyCommunityMemberDetail(), {
    validateShape: (res) => {
      expect(typeof res).toBe("object");
      expect(res).toBeDefined();
    },
  });
});
