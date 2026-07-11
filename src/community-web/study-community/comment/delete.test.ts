import { deleteComment } from "./delete";
import { test, testAuthWriteApi } from "src/testUtils";

test("delete comment", async () => {
  await testAuthWriteApi(() => deleteComment(1), {
    rejectMessage: "token为空",
  });
});
