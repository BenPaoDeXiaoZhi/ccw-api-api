import { getStudentSessions } from "./list_sessions";
import { testAuthReadApi, expectKeys } from "src/testUtils";

test("get student sessions", async () => {
  await testAuthReadApi(() => getStudentSessions(), {
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
