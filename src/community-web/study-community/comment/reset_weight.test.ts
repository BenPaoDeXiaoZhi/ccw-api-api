import { resetCommentWeight } from "./reset_weight";
import { test, testAuthWriteApi } from "src/testUtils";

test("reset comment weight", async () => {
  await testAuthWriteApi(() => resetCommentWeight(1), {
    rejectMessage: "token为空",
  });
});
