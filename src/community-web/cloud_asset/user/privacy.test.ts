import { getUserAssetStorageSize } from "./privacy";
import { expectKeys, testAuthReadApi } from "src/testUtils";

test("get user asset storage size should fail without token", async () => {
  await testAuthReadApi(() => getUserAssetStorageSize(), {
    rejectMessage: "ccw axios Request failed: token为空",
    validateShape: (res) => {
      expectKeys(res, ["totalStorage", "usedStorage"]);
    },
  });
});
