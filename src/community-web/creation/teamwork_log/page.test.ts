import { getTeamworkLogPage } from "./page";
import { testAuthReadApi, expectKeys } from "src/testUtils";

test("get teamwork log page should fail without token", async () => {
  await testAuthReadApi(
    () => getTeamworkLogPage("63c2807d669fa967f17f5559", ["BLOCK"]),
    {
      rejectMessage: "token为空",
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
    },
  );
});
