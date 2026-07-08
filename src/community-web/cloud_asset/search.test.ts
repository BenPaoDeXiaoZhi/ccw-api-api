import { searchCloudAssets } from "./search";
import { expectKeys, testAuthReadApi } from "src/testUtils";

test("search cloud assets should fail without token", async () => {
  const userId = "63c2807d669fa967f17f5559";
  const path = "/23azZqHBnqj/";
  await testAuthReadApi(() => searchCloudAssets(userId, path), {
    rejectMessage: "ccw axios Request failed: token为空(4001082401)",
    validateShape: (res) => {
      expectKeys(res, [
        "data",
        "offset",
        "page",
        "perPage",
        "totalNum",
        "totalPages",
      ]);
      expect(Array.isArray(res.data)).toBe(true);
    },
  });
});
