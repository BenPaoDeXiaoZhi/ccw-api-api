import { viewCreationStats } from "./view";

const CREATION_OID = "62bd863874c3155ff7a54308";

test("view creation stats should return boolean", async () => {
  const res = await viewCreationStats(CREATION_OID);
  expect(typeof res).toBe("boolean");
});