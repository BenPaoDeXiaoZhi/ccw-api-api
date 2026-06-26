import { searchCloudAssets } from "./search";

test("search cloud assets should fail without token", async () => {
  const userId = "63c2807d669fa967f17f5559";
  const path = "/23azZqHBnqj/";
  await expect(searchCloudAssets(userId, path)).rejects.toThrow(
    "ccw axios Request failed: token为空(4001082401)",
  );
});
