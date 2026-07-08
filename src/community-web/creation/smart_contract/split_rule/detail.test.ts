import { getSplitRuleDetail } from "./detail";
import { testAuthReadApi } from "src/testUtils";

test("get split rule detail should fail without token", async () => {
  await testAuthReadApi(
    () => getSplitRuleDetail("63c2807d669fa967f17f5559"),
    {
      rejectMessage: "token为空",
      validateShape: (res) => {
        expect(typeof res).toBe("object");
      },
    },
  );
});
