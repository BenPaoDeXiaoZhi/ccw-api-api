import { getCloudVariableDetailV2 } from "./v2";
import { test, testAuthReadApi, expectType } from "src/testUtils";

test("get cloud variable detail v2 should reject with invalid params", async () => {
  await testAuthReadApi(
    () =>
      getCloudVariableDetailV2(
        "6a3fa1ed159ed52f170c34d2",
        "6a3fa1ed159ed52f170c34d2-u",
        "244373873",
        ["4576y!!2"],
      ),
    {
      validateShape: (res) => {
        expectType(res, "object");
      },
    },
  );
});