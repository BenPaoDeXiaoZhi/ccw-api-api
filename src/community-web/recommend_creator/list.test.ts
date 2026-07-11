import { getRecommendCreators } from "./list";
import { test } from "src/testUtils";
import assert from "node:assert/strict";

test("get recommend creators should return data", async () => {
  const res = await getRecommendCreators(1, 1);
  assert.ok(Boolean(Array.isArray(res)), "expected value to be truthy");
  if (res.length > 0) {
    assert.match(String(res[0].creatorType), /^(EXCELLENT|POTENTIAL)$/, "expected string to match");
    assert.ok(((res[0].studentOid) !== undefined), "expected value to be defined");
    assert.ok(((res[0].name) !== undefined), "expected value to be defined");
  }
});