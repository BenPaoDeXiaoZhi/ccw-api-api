import { getMyHashTagCreations } from "./mine";
import { testAuthReadApi, expectKeys } from "src/testUtils";

test("get my hash tag creations should reject without login", async () => {
  await testAuthReadApi(() => getMyHashTagCreations(), {
    rejectMessage: "token为空",
    validateShape: (res) => {
      expectKeys(res, ["data", "offset", "page", "perPage", "totalNum", "totalPages"]);
      expect(Array.isArray(res.data)).toBe(true);
    },
  });
});
