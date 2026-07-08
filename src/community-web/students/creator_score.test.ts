import { getCreatorScore } from "./creator_score";
import { testAuthReadApi, expectKeys } from "src/testUtils";

test("get creator score", async () => {
  await testAuthReadApi(() => getCreatorScore(), {
    validateShape: (res) => {
      expectKeys(res, ["rank", "score", "studentOid"]);
    },
  });
});
