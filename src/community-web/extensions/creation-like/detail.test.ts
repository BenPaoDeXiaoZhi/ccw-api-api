import { getConnectCommunityCreationLikeStatus } from "./detail";

test("should fail without token when getting creation like status", async () => {
  await expect(
    getConnectCommunityCreationLikeStatus(
      "6a3fa1ed159ed52f170c34d2",
      "6a3fa1ed159ed52f170c34d2",
    ),
  ).rejects.toThrow();
});