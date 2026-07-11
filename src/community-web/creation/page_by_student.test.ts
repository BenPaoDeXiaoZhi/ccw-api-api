import { getCreationsByStudent } from "./page_by_student";
import { getExcellentCreations } from "./excellent/list";
import { test, beforeAll } from "src/testUtils";
import assert from "node:assert/strict";

let sampleStudentOid: string;

beforeAll(async () => {
  const creations = await getExcellentCreations(1);
  if (creations.length > 0) {
    sampleStudentOid = creations[0].studentOid;
  }
}, 30000);

test("get creations by student should return data", async () => {
  if (!sampleStudentOid) {
    return;
  }
  const res = await getCreationsByStudent([sampleStudentOid]);
  assert.strictEqual(Array.isArray(res.data), (true), "expected values to be strictly equal");
  res.data.forEach((c) => {
    assert.ok(((c.oid) !== undefined), "expected value to be defined");
    assert.ok(((c.studentOid) !== undefined), "expected value to be defined");
  });
});
