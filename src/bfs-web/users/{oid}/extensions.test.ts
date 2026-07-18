import { getUserExtensions } from "./extensions";
import { test, hasKeyPath } from "src/testUtils";
import assert from "node:assert/strict";

test("get user extensions should fail without token", async () => {
  const dat = await getUserExtensions("63c2807d669fa967f17f5559");
  assert.ok(Array.isArray(dat.data));
});
