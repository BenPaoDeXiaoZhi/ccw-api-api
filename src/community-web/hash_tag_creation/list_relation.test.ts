import { getPlanetsOfCreation } from "./list_relation";

const CREATION_OID = "62bd863874c3155ff7a54308";

test("get hash tag creation relation list should reject without login", async () => {
  await expect(getPlanetsOfCreation(CREATION_OID)).rejects.toThrow();
});
