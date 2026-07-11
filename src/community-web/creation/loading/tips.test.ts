import { getLoadingTips } from "./tips";
import { test } from "src/testUtils";
import assert from "node:assert/strict";

test("get loading tips should return data", async () => {
  const res = await getLoadingTips();
  assert.ok(((res["小八"]) !== undefined), "expected value to be defined");
  assert.ok(((res["胖达"]) !== undefined), "expected value to be defined");
  assert.ok(((res["妮可"]) !== undefined), "expected value to be defined");
  assert.ok(((res["孙小弟"]) !== undefined), "expected value to be defined");
});
