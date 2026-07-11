import { getReputationScoreLog } from "./page";
import { test, testAuthReadApi, expectKeys } from "src/testUtils";

test("get reputation score log page", async () => {
  await testAuthReadApi(() => getReputationScoreLog(), {
    validateShape: (res) => {
      expectKeys(res, [
        "data",
        "offset",
        "page",
        "perPage",
        "totalNum",
        "totalPages",
      ]);
    },
  });
});
