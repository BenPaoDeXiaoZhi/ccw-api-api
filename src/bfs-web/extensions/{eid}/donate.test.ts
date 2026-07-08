import { donateExtension } from "./donate";
import { testAuthWriteApi } from "src/testUtils";

test("donate extension", async () => {
  await testAuthWriteApi(() => donateExtension("spineAnimation", -1), {});
});
