import { getDonatedRecordRanking } from "./ranking_list";
import { test } from "src/testUtils";
import assert from "node:assert/strict";

const CREATION_OID = "62bd863874c3155ff7a54308";

test("get donated record ranking should return data", async () => {
  const res = await getDonatedRecordRanking(CREATION_OID, { perPage: 5 });
  assert.ok(((res.totalBucks) !== undefined), "expected value to be defined");
  assert.ok(((res.rankingList.data.length) > (0)), "expected greater than");
  res.rankingList.data.forEach((record) => {
    assert.ok(((record.bucks) !== undefined), "expected value to be defined");
    assert.ok(((record.donatorName) !== undefined), "expected value to be defined");
    assert.ok(((record.donatorOid) !== undefined), "expected value to be defined");
  });
});
