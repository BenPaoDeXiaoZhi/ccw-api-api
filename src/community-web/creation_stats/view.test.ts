import { viewCreationStats } from "./view";
import { test } from "src/testUtils";
import assert from "node:assert/strict";

const CREATION_OID = "62bd863874c3155ff7a54308";

test("view creation stats should return boolean", async () => {
  const res = await viewCreationStats(CREATION_OID);
  assert.strictEqual(typeof res, ("boolean"), "expected values to be strictly equal");
});
