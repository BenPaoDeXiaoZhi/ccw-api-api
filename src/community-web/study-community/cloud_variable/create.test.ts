import { createCloudVariable } from "./create";
import { test, testAuthWriteApi } from "src/testUtils";

test("create cloud variable should fail without token", async () => {
  await testAuthWriteApi(
    () => createCloudVariable("63c2807d669fa967f17f5559", {}),
    {
      rejectMessage: "token为空",
    },
  );
});
