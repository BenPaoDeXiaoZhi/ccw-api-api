import { topComment } from "./top";
import { test, testAuthWriteApi } from "src/testUtils";

test("top comment", async () => {
  await testAuthWriteApi(() => topComment(1), {
    rejectMessage: "token为空",
  });
});
