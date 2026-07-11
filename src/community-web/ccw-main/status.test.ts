import { getCCWMainStatus } from "./status";
import { test, testAuthReadApi, expectKeys } from "src/testUtils";

test("get ccw main status should fail without token", async () => {
  await testAuthReadApi(() => getCCWMainStatus(), {
    rejectMessage: "token为空",
    validateShape: (res) => {
      expectKeys(res, ["data", "datetime"]);
    },
  });
});
