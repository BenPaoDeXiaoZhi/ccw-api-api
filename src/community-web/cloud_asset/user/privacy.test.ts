import { getUserAssetStorageSize } from "./privacy";

test("get user asset storage size should fail without token", async () => {
  await expect(getUserAssetStorageSize()).rejects.toThrow(
    "ccw axios Request failed: token为空",
  );
});