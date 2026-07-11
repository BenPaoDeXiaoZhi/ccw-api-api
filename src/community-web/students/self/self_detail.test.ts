import { getStudentSelfDetail } from "./detail";
import { test, testAuthReadApi, expectKeys } from "src/testUtils";

test("get student self detail", async () => {
  await testAuthReadApi(
    () => getStudentSelfDetail(true, true, ["name", "avatar"]),
    {
      validateShape: (res) => {
        expectKeys(res, [
          "oid",
          "name",
          "avatar",
          "studentNumber",
          "accountNumber",
        ]);
      },
    },
  );
});
