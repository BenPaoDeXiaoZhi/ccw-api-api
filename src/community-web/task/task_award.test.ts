import { acceptAward } from "./award";
import { test, testAuthWriteApi } from "src/testUtils";

const TASK_OID = "61273ccf1730f4308e853f6a";

test("award task", async () => {
  await testAuthWriteApi(() => acceptAward(TASK_OID), {
    rejectMessage: "token为空",
  });
});
