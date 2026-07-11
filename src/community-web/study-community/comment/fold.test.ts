import { foldComment } from "./fold";
import { test, testAuthWriteApi } from "src/testUtils";

test("fold comment", async () => {
  await testAuthWriteApi(() => foldComment(1), {
    rejectMessage: "token为空",
  });
});
