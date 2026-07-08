import { replyComment } from "./reply";
import { testAuthWriteApi } from "src/testUtils";

test("reply comment", async () => {
  await testAuthWriteApi(() => replyComment("test reply", 1), {
    rejectMessage: "token为空",
  });
});
