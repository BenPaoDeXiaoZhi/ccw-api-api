import { likeComment } from "./create";
import { testAuthWriteApi } from "src/testUtils";

test("like comment", async () => {
  await testAuthWriteApi(() => likeComment(1), {
    rejectMessage: "token为空",
  });
});
