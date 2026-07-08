import { getPlanetsOfCreation } from "./list_relation";
import { testAuthReadApi } from "src/testUtils";

const CREATION_OID = "62bd863874c3155ff7a54308";

test("get hash tag creation relation list should reject without login", async () => {
  await testAuthReadApi(() => getPlanetsOfCreation(CREATION_OID), {
    validateShape: (res) => {
      expect(Array.isArray(res)).toBe(true);
    },
  });
});
