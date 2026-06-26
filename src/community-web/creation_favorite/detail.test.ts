import { getCreationFavoriteDetail } from "./detail";

const CREATION_OID = "62bd863874c3155ff7a54308";

test("get creation favorite detail should reject without login", async () => {
  await expect(getCreationFavoriteDetail(CREATION_OID)).rejects.toThrow(
    "ccw axios Request failed: token为空(4001082401)",
  );
});
