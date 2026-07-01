import { getConnectCommunityFollowingStatus } from "./status";

test("should fail without token when getting following status", async () => {
  await expect(
    getConnectCommunityFollowingStatus(
      "6a3fa1ed159ed52f170c34d2",
      "651e3f7310b0530e7f80fe7a",
    ),
  ).rejects.toThrow();
});