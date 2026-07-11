import { checkCaptcha } from "./check";
import { createCaptcha } from "./create";
import { test, hasKeyPath } from "src/testUtils";
import assert from "node:assert/strict";

test("checkCaptcha returns structured result with token and coords without auth", async () => {
  const created = await createCaptcha("BLOCK_PUZZLE");
  const res = await checkCaptcha(created.token, 0, -1);
  assert.ok(hasKeyPath(res, "captchaExpired"), "expected property to exist");
  assert.ok(hasKeyPath(res, "errorMsg"), "expected property to exist");
  assert.ok(hasKeyPath(res, "success"), "expected property to exist");
  assert.ok(!Boolean(res.captchaExpired), "expected value to be falsy");
  assert.ok(!Boolean(res.success), "expected value to be falsy");
  assert.deepStrictEqual(res.errorMsg, ("验证失败"), "expected values to be deeply equal");
}, 30000);
