import { getLikeDetail } from "./detail";
import { getExcellentCreations } from "../excellent/list";
import { test, beforeAll } from "src/testUtils";
import assert from "node:assert/strict";

let sampleCreationOid: string;

beforeAll(async () => {
  const creations = await getExcellentCreations(1);
  if (creations.length > 0) {
    sampleCreationOid = creations[0].oid;
  }
}, 30000);

test("get like detail should return data", async () => {
  if (!sampleCreationOid) {
    return;
  }
  const res = await getLikeDetail(sampleCreationOid);
  if (res) {
    assert.strictEqual(res.creationOid, (sampleCreationOid), "expected values to be strictly equal");
    assert.ok(((res.action) !== undefined), "expected value to be defined");
  }
});
