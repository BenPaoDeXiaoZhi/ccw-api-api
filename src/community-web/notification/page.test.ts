import { getNotificationPage } from "./page";
import { testAuthReadApi, expectKeys } from "src/testUtils";

test("get notification page should reject without login", async () => {
  await testAuthReadApi(() => getNotificationPage(), {
    validateShape: (res) => {
      expectKeys(res, ["data", "offset", "page", "perPage", "totalNum", "totalPages"]);
      expect(Array.isArray(res.data)).toBe(true);
    },
  });
});
