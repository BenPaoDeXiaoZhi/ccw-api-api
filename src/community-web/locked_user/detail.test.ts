import { getLockedUserDetail } from "./detail";
import { test } from "src/testUtils";
import assert from "node:assert/strict";

const ACCOUNT_OID = "63c2807d669fa967f17f5559";

test("get locked user detail should return data", async () => {
  const res = await getLockedUserDetail(ACCOUNT_OID);
  assert.ok(((res.locked) !== undefined), "expected value to be defined");
});
