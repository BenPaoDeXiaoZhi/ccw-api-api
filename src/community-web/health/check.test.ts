import { getHealthCheck } from "./check";
import { test } from "src/testUtils";
import assert from "node:assert/strict";

test("health check should return data", async () => {
  const res = await getHealthCheck();
  assert.strictEqual(Array.isArray(res), (true), "expected values to be strictly equal");
  if (res.length > 0) {
    assert.ok(((res[0].name) !== undefined), "expected value to be defined");
    assert.ok(((res[0].status) !== undefined), "expected value to be defined");
    assert.ok(((res[0].traceId) !== undefined), "expected value to be defined");
  }
});
