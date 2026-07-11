import { getHashTagFavoriteDetail } from "./detail";
import { test, testAuthReadApi, expectKeys } from "src/testUtils";

test("get hash tag favorite detail should reject without login", async () => {
  await testAuthReadApi(() => getHashTagFavoriteDetail(29887), {
    rejectMessage: "token为空",
    validateShape: (res) => {
      expectKeys(res, [
        "createdAt",
        "ext",
        "hashTagId",
        "id",
        "lastFavoritedAt",
        "studentOid",
        "unfavoritedAt",
        "updatedAt",
      ]);
    },
  });
});
