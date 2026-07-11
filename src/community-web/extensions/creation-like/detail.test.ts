import { getConnectCommunityCreationLikeStatus } from "./detail";
import { test, testAuthReadApi, expectKeys } from "src/testUtils";

test("get creation like status", async () => {
  await testAuthReadApi(
    () =>
      getConnectCommunityCreationLikeStatus(
        "6a3fa1ed159ed52f170c34d2",
        "6a3fa1ed159ed52f170c34d2",
      ),
    {
      validateShape: (res) => {
        expectKeys(res, ["oid", "title", "interactionStatus"]);
      },
    },
  );
});