import { getStudentBlockRecordList } from "./list";
import { test, testAuthReadApi, hasKeyPath } from "src/testUtils";
import assert from "node:assert/strict";

test("get student block record list should reject without login", async () => {
  await testAuthReadApi(() => getStudentBlockRecordList(), {
    validateShape: (res) => {
      assert.strictEqual(typeof res, ("object"), "expected values to be strictly equal");
      assert.ok(hasKeyPath(res, "data"), "expected property to exist");
      assert.strictEqual(Array.isArray(res.data), (true), "expected values to be strictly equal");
      assert.ok(hasKeyPath(res, "offset"), "expected property to exist");
      assert.ok(hasKeyPath(res, "page"), "expected property to exist");
      assert.ok(hasKeyPath(res, "perPage"), "expected property to exist");
      assert.ok(hasKeyPath(res, "totalNum"), "expected property to exist");
      assert.ok(hasKeyPath(res, "totalPages"), "expected property to exist");
    },
  });
});
