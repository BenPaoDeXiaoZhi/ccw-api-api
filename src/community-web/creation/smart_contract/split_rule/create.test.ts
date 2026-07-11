import { createSplitRule } from "./create";
import { test, testAuthWriteApi } from "src/testUtils";

test("create split rule should fail without token", async () => {
  await testAuthWriteApi(() => createSplitRule("63c2807d669fa967f17f5559", []), {
    rejectMessage: "token为空",
  });
});
