import { getUserCardDetail } from "./detail";
import { test } from "src/testUtils";
import assert from "node:assert/strict";

const USER_OID = "63c2807d669fa967f17f5559";

test("get user card detail", async () => {
  const card = await getUserCardDetail(USER_OID);
  assert.strictEqual(card.user.oid, (USER_OID), "expected values to be strictly equal");
});
