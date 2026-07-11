import { setUserProductStatus } from "./status";
import { test, testAuthReadApi, expectType } from "src/testUtils";

test("should fail without token when setting user product status", async () => {
  await testAuthReadApi(() => setUserProductStatus(105847, false), {
    validateShape: (res) => {
      expectType(res, "boolean");
    },
  });
});
