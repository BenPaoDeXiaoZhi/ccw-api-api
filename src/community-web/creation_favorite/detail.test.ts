import { testAuthReadApi } from "src/testUtils";
import { getCreationFavoriteDetail } from "./detail";

const CREATION_OID = "62bd863874c3155ff7a54308";

test("get creation favorite detail should reject without login", async () => {
  await testAuthReadApi(() => getCreationFavoriteDetail(CREATION_OID), {
    rejectMessage: "ccw axios Request failed: token为空(4001082401)",
    validateShape: (res) => {
      expect(typeof res).toBe("object");
      expect(res).toBeDefined();
    },
  });
});
