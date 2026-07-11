import { getStudentsList } from "./list";
import { test } from "src/testUtils";
import assert from "node:assert/strict";

const STUDENT_OIDS = ["63c2807d669fa967f17f5559", "62bd863874c3155ff7a54308"];

test("get students list", async () => {
  const result = await getStudentsList(STUDENT_OIDS);
  assert.strictEqual(Array.isArray(result), (true), "expected values to be strictly equal");
  assert.strictEqual(result[0].oid, (STUDENT_OIDS[0]), "expected values to be strictly equal");
});
