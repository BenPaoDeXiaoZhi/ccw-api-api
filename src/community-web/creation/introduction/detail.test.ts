import { getCreationIntroduction } from "./detail";
import { getExcellentCreations } from "../excellent/list";
import { test, beforeAll } from "src/testUtils";
import assert from "node:assert/strict";

let sampleStudentOid: string;

beforeAll(async () => {
  const creations = await getExcellentCreations(1);
  if (creations.length > 0) {
    sampleStudentOid = creations[0].studentOid;
  }
}, 30000);

test("get creation introduction should return data", async () => {
  if (!sampleStudentOid) {
    return;
  }
  const res = await getCreationIntroduction(sampleStudentOid);
  assert.ok(((res.oid) !== undefined), "expected value to be defined");
  assert.ok(((res.title) !== undefined), "expected value to be defined");
});
