import { followCreator } from "./follow";
import { test, testAuthWriteApi } from "src/testUtils";

test("follow creator", async () => {
  await testAuthWriteApi(() => followCreator("651e3f7310b0530e7f80fe7a"));
});
