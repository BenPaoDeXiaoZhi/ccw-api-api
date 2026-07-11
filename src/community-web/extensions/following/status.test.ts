import { getConnectCommunityFollowingStatus } from "./status";
import { test, testAuthReadApi, expectKeys } from "src/testUtils";

test("get following status", async () => {
  await testAuthReadApi(
    () =>
      getConnectCommunityFollowingStatus(
        "6a3fa1ed159ed52f170c34d2",
        "651e3f7310b0530e7f80fe7a",
      ),
    {
      validateShape: (res) => {
        expectKeys(res, ["oid", "name", "avatar", "isFollowing"]);
      },
    },
  );
});